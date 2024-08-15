import { useCallback } from "react";
import toast from "react-hot-toast";
import useApiClient from "../hooks/useApiClient";

const usePlaylistActionsBase = () => {
  const swarApiClient = useApiClient();

  const handleApiAction = useCallback(
    async (apiCall, successMessage, errorMessage) => {
      try {
        await apiCall();
        toast.success(successMessage);
      } catch (error) {
        if (error.response?.status === 409)
          return toast.error("Song already exists in the playlist.");
        else toast.error(errorMessage);
      }
    },
    []
  );

  const handleAddToPlaylist = useCallback(
    async (playlistId, songId) => {
      await handleApiAction(
        () =>
          swarApiClient.post("PlaylistSongs/AddSongToPlaylist", {
            playlistId,
            songId,
          }),
        "Song added to playlist successfully.",
        "Failed to add song to playlist."
      );
    },
    [handleApiAction, swarApiClient]
  );

  const handleRemoveFromPlaylist = useCallback(
    async (playlistId, songId) => {
      await handleApiAction(
        () =>
          swarApiClient.delete(
            `PlaylistSongs/RemoveSongFromPlaylist/${playlistId}/${songId}`
          ),
        "Song removed from playlist successfully.",
        "Failed to remove song from playlist."
      );
    },
    [handleApiAction, swarApiClient]
  );

  return {
    handleAddToPlaylist,
    handleRemoveFromPlaylist,
  };
};

export default usePlaylistActionsBase;
