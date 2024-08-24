import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import useRecentlyPlayedSongs from "../hooks/useRecentlyPlayedSongs";
import { Avatar } from "@nextui-org/react";
import { CustomScroll } from "react-custom-scroll";
import toast from "react-hot-toast";
import useApiClient from "../hooks/useApiClient";

import playlistSvg from "../assets/img/playlist.svg";
import neutralAvatar from "../assets/img/neutral-avatar.svg";
import ProfileSkeleton from "../components/ProfileSkeleton";
import PlaylistsSkeleton from "../components/PlaylistsSkeleton";
import { LuBadgeCheck } from "react-icons/lu";
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
    <div className="mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Profile Section */}
        <div className="w-full md:w-1/2 lg:w-1/3 bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700">
          {isLoading ? (
            <ProfileSkeleton />
          ) : (
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-8">
                <Avatar
                  src={user ? user?.picture : neutralAvatar}
                  className="w-36 h-36 rounded-full border-4 border-gradient-to-r from-blue-500 to-teal-400 shadow-xl"
                />
                <span className="absolute bottom-0 right-0 bg-green-500 text-white text-xs font-bold rounded-full px-3 py-1 shadow-md">
                  <LuBadgeCheck className="w-5 h-5" />
                </span>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full">
                <h2 className="text-lg font-extrabold text-white mb-2">
                  {user?.name || "N/A"}
                </h2>
                <p className="text-gray-300 text-base mb-2">
                  {user?.email || "N/A"}
                </p>
                <p className="text-gray-400 text-sm mb-2">
                  Last Updated:{" "}
                  {user?.updated_at
                    ? new Date(user.updated_at).toLocaleDateString()
                    : "N/A"}
                </p>
                <p className="text-gray-400 text-sm mb-2">
                  Email Verified: {user?.email_verified ? "Yes" : "No"}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="w-full md:w-2/3">
          {/* Playlists Section */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-700 mb-8">
            {loadingPlaylists ? (
              <PlaylistsSkeleton />
            ) : (
              <>
                <h2 className="text-2xl font-extrabold text-white mb-6">
                  Your Playlists
                </h2>
                <CustomScroll>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mr-4">
                    {playlists.length > 0 ? (
                      playlists.map((playlist) => (
                        <Link
                          key={playlist.playlistId}
                          to={`/playlist/${playlist.publicId}`}
                          className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-4"
                        >
                          <img
                            src={playlistSvg}
                            alt="Playlist Thumbnail"
                            className="w-12 h-12 rounded-full"
                          />
                          <div className="flex-1 overflow-hidden">
                            <h3 className="text-xl font-semibold text-white truncate overflow-hidden whitespace-nowrap">
                              {playlist.playlistName}
                            </h3>
                            <p className="text-gray-300 text-sm truncate overflow-hidden whitespace-nowrap">
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

          {/* Recent Activity Section */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-700">
            {recentlyPlayedLoading ? (
              <PlaylistsSkeleton />
            ) : (
              <>
                <h2 className="text-2xl font-extrabold text-white mb-6">
                  Recent Activity
                </h2>
                <CustomScroll>
                  <div className="space-y-4 max-h-[calc(4*5rem)]">
                    {recentlyPlayed.length > 0 ? (
                      recentlyPlayed.map((activity) => (
                        <Link
                          key={activity.id}
                          to="/player"
                          state={{ songId: activity.id }}
                          className="bg-gray-700 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-4 min-w-[250px] mr-4"
                        >
                          <img
                            src={activity.image}
                            alt={activity.song}
                            className="w-12 h-12 rounded-full"
                          />
                          <div>
                            <h3 className="text-xl font-semibold text-white">
                              {activity.song}
                            </h3>
                            {activity.primary_artists}
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
    </div>
  );
};

export default Profile;
