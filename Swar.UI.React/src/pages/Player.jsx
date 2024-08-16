import { useEffect, useState, useMemo, useCallback } from "react";
import { useParams } from "react-router-dom";
import {
  Image,
  Slider,
  Tabs,
  Tab,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Spinner,
} from "@nextui-org/react";
import { CustomScroll } from "react-custom-scroll";
import toast from "react-hot-toast";
import { Download, Pause, Play, Repeat } from "lucide-react";
import {
  MdSkipNext,
  MdSkipPrevious,
  MdInfoOutline,
  MdLyrics,
} from "react-icons/md";
import PlaylistInfoModal from "../components/modals/PlaylistInfoModal";
import SearchBar from "../components/SearchBar";
import PlayerSkeleton from "../components/PlayerSkeleton";
import LikeButton from "../components/LikeButton/LikeButton";
import usePlayer from "../hooks/usePlayer";

const SongPlayer = () => {
  const { id } = useParams();
  const {
    currentSong: song,
    isPlaying,
    duration,
    currentTime,
    loop,
    setLoop,
    loadSong,
    togglePlayPause,
    seek,
    goToNextSong,
    goToPreviousSong,
  } = usePlayer();

  const [sliderValue, setSliderValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const fetchSong = async () => {
      setLoading(true);
      await loadSong(id, true);
      setLoading(false);
    };
    fetchSong();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    setSliderValue(currentTime);
  }, [currentTime]);

  const handleSeek = useCallback(
    (value) => {
      seek(value, false);
      setSliderValue(value);
    },
    [seek]
  );

  const formatTime = useMemo(() => {
    return (seconds) => {
      const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
      const secs = String(Math.floor(seconds % 60)).padStart(2, "0");
      return `${minutes}:${secs}`;
    };
  }, []);

  const toggleLoop = () => setLoop((prev) => !prev);

  const downloadSong = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch(song.media_url);
      if (!response.ok) throw new Error("Unable to download");
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${song.song}.mp3`;
      a.click();
      URL.revokeObjectURL(url);
      toast.success("Downloaded successfully", { position: "bottom-center" });
    } catch {
      toast.error("Failed to download", { position: "bottom-center" });
    } finally {
      setIsDownloading(false);
    }
  };

  if (loading) return <PlayerSkeleton />;

  return (
    <div className="mt-7">
      <div className="block md:hidden mb-6 mx-6">
        <SearchBar />
      </div>
      <div>
        <div className="grid gap-6">
          <div className="grid text-center place-content-center gap-3 mx-auto">
            <div className="flex justify-center">
              <Image isBlurred src={song.image} width={240} alt={song.song} />
            </div>

            <h1 className="text-lg mx-auto font-bold md:max-w-lg max-w-[260px]">
              {song.song}
            </h1>
            <p className="text-xs -mt-2 max-w-xl mx-auto">
              {song.singers || song.primary_artists || "Unknown Artist"}
            </p>
          </div>
          <div className="-mt-3 -mb-3 w-full max-w-[400px] mx-auto flex items-center justify-between">
            <LikeButton songId={song.id} />
            <PlaylistInfoModal songId={song.id} />
          </div>
          <Slider
            aria-label="Music progress"
            color="primary"
            step={1}
            maxValue={duration}
            minValue={0}
            onChange={handleSeek}
            value={sliderValue}
            className="w-full max-w-[400px] mx-auto"
          />
          <div className="-mt-6 -mb-3 w-full max-w-[400px] mx-auto flex items-center justify-between">
            <span className="text-xs">{formatTime(currentTime)}</span>
            <span className="text-xs">{formatTime(duration)}</span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={toggleLoop}
              className={`text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 ${
                loop ? "bg-blue-700" : "bg-gray-700"
              }`}
            >
              <Repeat />
            </button>
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={goToPreviousSong}
                className="bg-gray-700 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                <MdSkipPrevious className="text-2xl" />
              </button>
              <button
                onClick={togglePlayPause}
                className="bg-gray-700 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                {isPlaying ? <Pause /> : <Play />}
              </button>
              <button
                onClick={goToNextSong}
                className="bg-gray-700 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                <MdSkipNext className="text-2xl" />
              </button>
            </div>
            <button
              onClick={downloadSong}
              className={`bg-gray-700 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 ${
                isDownloading
                  ? "cursor-not-allowed opacity-60"
                  : "hover:bg-gray-600"
              }`}
              disabled={isDownloading}
            >
              {isDownloading ? (
                <Spinner size="sm" color="default" />
              ) : (
                <Download />
              )}
            </button>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-4 mt-6">
            <Tabs
              aria-label="Tabs sizes"
              color="primary"
              classNames={{
                tabList: "bg-gray-600 text-white",
                tabContent: "text-white",
              }}
            >
              <Tab
                key="info"
                title={
                  <div className="flex items-center space-x-2">
                    <MdInfoOutline className="text-2xl" />
                    <span>Song Details</span>
                  </div>
                }
              >
                <Card className="w-[94vw] bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-700">
                  <CardHeader className="flex gap-3">
                    <h2 className="text-3xl font-bold text-white mb-4">
                      Song Details
                    </h2>
                  </CardHeader>
                  <Divider />
                  <CardBody>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: "Album", value: song.album },
                        { label: "Song", value: song.song },
                        { label: "Artists", value: song.primary_artists },
                        { label: "Release Date", value: song.release_date },
                        { label: "Year", value: song.year },
                        { label: "Language", value: song.language },
                        {
                          label: "Song Duration",
                          value: `${song.duration} seconds`,
                        },
                        { label: "Play Count", value: song.play_count },
                        {
                          label: "Lyrics",
                          value:
                            song.has_lyrics === "true"
                              ? "Available"
                              : "Not Available",
                        },
                      ].map(({ label, value }) => (
                        <div key={label}>
                          <h3 className="text-xl font-semibold text-gray-200">
                            {label}
                          </h3>
                          <p className="text-gray-300">{value}</p>
                        </div>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </Tab>
              <Tab
                key="lyrics"
                title={
                  <div className="flex items-center space-x-2">
                    <MdLyrics className="text-2xl" />
                    <span>Lyrics</span>
                  </div>
                }
              >
                <Card className="w-[94vw] bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-700">
                  <CardHeader className="flex gap-3">
                    <h2 className="text-3xl font-bold text-white mb-4">
                      Lyrics
                    </h2>
                  </CardHeader>
                  <Divider />
                  <CardBody>
                    <>
                      {song?.lyrics ? (
                        <CustomScroll>
                          <div className="max-h-[36rem] mr-4">
                            <p
                              className="text-base text-gray-200 leading-relaxed whitespace-pre-line text-md"
                              dangerouslySetInnerHTML={{
                                __html: song.lyrics,
                              }}
                            />
                          </div>
                        </CustomScroll>
                      ) : (
                        <p className="text-gray-300 text-center">
                          It looks like the lyrics for this song aren&apos;t
                          available right now.
                        </p>
                      )}
                    </>
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongPlayer;
