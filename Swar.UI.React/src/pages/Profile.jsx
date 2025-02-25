import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import useRecentlyPlayedSongs from "../hooks/useRecentlyPlayedSongs";
import { User, Image, Divider } from "@heroui/react";
import { CustomScroll } from "react-custom-scroll";
import toast from "react-hot-toast";
import useApiClient from "../hooks/useApiClient";

import {
  MdEmail,
  MdVerified,
  MdUpdate,
  MdPlaylistPlay,
  MdMusicNote,
} from "react-icons/md";
import playlistSvg from "../assets/img/playlist.svg";
import neutralAvatar from "../assets/img/neutral-avatar.svg";
import ProfileSkeleton from "../components/ProfileSkeleton";
import PlaylistsSkeleton from "../components/PlaylistsSkeleton";
import { Link } from "react-router-dom";

const Profile = () => {
  const swarApiClient = useApiClient();
  const [data, setData] = useState({
    playlists: [],
    loadingPlaylists: true,
  });
  const { user, isLoading } = useAuth0();
  const { recentlyPlayed, loading: recentlyPlayedLoading } =
    useRecentlyPlayedSongs();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await swarApiClient.get(
          "Playlist/GetAllPlaylistsByUserId"
        );

        setData({
          playlists: data,
          loadingPlaylists: false,
        });
      } catch {
        toast.error("Failed to fetch profile data");
        setData((prev) => ({
          ...prev,
          loadingPlaylists: false,
        }));
      }
    };

    fetchData();
  }, [swarApiClient]);

  const { playlists, loadingPlaylists } = data;

  return (
    <div className="px-6 py-12 mx-auto">
      <div className="flex flex-col gap-8 md:flex-row">
        {/* Profile Section */}
        <div className="w-full p-4 border border-gray-700 shadow-2xl md:w-1/2 lg:w-1/3 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl">
          {isLoading ? (
            <ProfileSkeleton />
          ) : (
            <div className="flex flex-row text-left">
              <div className="w-full p-6">
                <User
                  name={user?.name}
                  description={user?.nickname}
                  className="mb-5"
                  avatarProps={{
                    src: user ? user?.picture : neutralAvatar,
                    size: "lg",
                    radius: "sm",
                  }}
                  classNames={{
                    name: "text-xl font-semibold text-white",
                    description: "text-md text-gray-300",
                  }}
                />
                <div className="flex items-center gap-2 mb-2 text-gray-300">
                  <MdEmail className="text-xl text-blue-500" />
                  <p className="text-base">{user?.email || "N/A"}</p>
                </div>
                <div className="flex items-center gap-2 mb-2 text-gray-400">
                  <MdUpdate className="text-xl text-yellow-500" />
                  <p className="text-sm">
                    Last Updated:{" "}
                    {user?.updated_at
                      ? new Date(user.updated_at).toLocaleDateString()
                      : "N/A"}
                  </p>
                </div>
                <div className="flex items-center gap-2 mb-2 text-gray-400">
                  <MdVerified className="text-xl text-green-500" />
                  <p className="text-sm">
                    Email Verified: {user?.email_verified ? "Yes" : "No"}
                  </p>
                </div>
                <Divider className="my-4 bg-white" />
                <div>
                  <h3 className="mb-4 text-lg font-bold text-white">
                    Profile Statistics
                  </h3>
                  <div className="flex items-center gap-2 mb-2 text-gray-400">
                    <MdPlaylistPlay className="text-xl text-purple-500" />
                    <p className="text-sm">
                      Playlists Created: {playlists.length}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mb-2 text-gray-400">
                    <MdMusicNote className="text-xl text-teal-500" />
                    <p className="text-sm">
                      Songs Listened: {recentlyPlayed.count}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Playlists Section */}
        <div className="w-full p-8 border border-gray-700 shadow-2xl md:w-1/2 lg:w-2/3 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl">
          {loadingPlaylists ? (
            <PlaylistsSkeleton />
          ) : (
            <>
              <h2 className="mb-6 text-2xl font-extrabold text-white">
                Your Playlists
              </h2>
              <CustomScroll>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 max-h-[calc(3*5rem)]">
                  {playlists.length > 0 ? (
                    playlists.map((playlist) => (
                      <Link
                        key={playlist.playlistId}
                        to={`/playlist/${playlist.publicId}`}
                        className="flex items-center gap-4 p-6 transition-shadow duration-300 bg-gray-700 rounded-lg shadow-lg hover:shadow-xl"
                      >
                        <img
                          src={playlistSvg}
                          alt="Playlist Thumbnail"
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1 overflow-hidden">
                          <h3 className="overflow-hidden text-xl font-semibold text-white truncate whitespace-nowrap">
                            {playlist.playlistName}
                          </h3>
                          <p className="overflow-hidden text-sm text-gray-300 truncate whitespace-nowrap">
                            {playlist.description}
                          </p>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div>No playlists available</div>
                  )}
                </div>
              </CustomScroll>
            </>
          )}
        </div>
      </div>

      {/* Recently Played Section */}
      <div className="mt-8">
        <div className="w-full p-8 border border-gray-700 shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl">
          {recentlyPlayedLoading ? (
            <PlaylistsSkeleton />
          ) : (
            <>
              <h2 className="mb-6 text-2xl font-extrabold text-white">
                Recent Activity
              </h2>
              <CustomScroll>
                <div className="space-y-4 max-h-[calc(4*5rem)]">
                  {recentlyPlayed.count > 0 ? (
                    recentlyPlayed.songs.map((activity) => (
                      <Link
                        key={activity.id}
                        to="/player"
                        state={{ songId: activity.id }}
                        className="flex items-center gap-4 min-w-[250px] mr-4"
                      >
                        <Image
                          isBlurred
                          radius="sm"
                          src={activity.image || playlistSvg}
                          alt="Album Cover"
                          className="w-12 h-12 min-w-12"
                        />
                        <div className="flex flex-col justify-center flex-grow ml-4 overflow-hidden">
                          <h3 className="mb-1 text-base font-semibold text-white sm:text-lg">
                            {activity.song}
                          </h3>
                          <p className="mb-1 text-xs text-gray-400 sm:text-sm">
                            {activity.primary_artists}
                          </p>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div>No recent activity available</div>
                  )}
                </div>
              </CustomScroll>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
