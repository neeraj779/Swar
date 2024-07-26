async function fetchPlaylistData() {
  try {
    const playlistUrl =
      "https://songserviceapi.azurewebsites.net/api/SongsData/GetPlaylistById?listId=1220338282&lyrics=false";
    const cacheName = "cached-songs";
    const cache = await caches.open(cacheName);
    let cachedResponse = await cache.match(playlistUrl);

    if (!cachedResponse) {
      cachedResponse = await fetch(playlistUrl);
      if (!cachedResponse.ok) {
        throw new Error("Failed to fetch playlist data");
      }
      await cache.put(playlistUrl, cachedResponse.clone());
    }

    return cachedResponse.json();
  } catch (error) {
    console.error("Error fetching playlist data:", error);
    return { content_list: [], songs: [] };
  }
}

async function fetchSearchData(query) {
  try {
    const searchUrl = `https://songserviceapi.azurewebsites.net/api/SongsData/GetSongsByQuery?query=${query}&lyrics=false&songData=true`;
    const response = await fetch(searchUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch search data");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching search data:", error);
    return [];
  }
}

function processSongData(playlistData, searchData) {
  const { content_list, songs } = playlistData;
  const songMap = new Map(songs.map((song) => [song.id, song]));

  return {
    trending: content_list.slice(0, 5).map((id) => songMap.get(id) || {}),
    search: searchData,
    artists: [...new Set(searchData.flatMap((song) => song.primary_artists))],
  };
}

async function fetchSongs() {
  const query = new URLSearchParams(window.location.search).get("q") || "";
  try {
    const [playlistData, searchData] = await Promise.all([
      fetchPlaylistData(),
      fetchSearchData(query),
    ]);
    return processSongData(playlistData, searchData);
  } catch (error) {
    console.error("Error fetching song data:", error);
    return null;
  }
}

function createSongCard({
  id,
  title = "Unknown Title",
  image = "default-image.jpg",
  song = "Unknown Song",
  primary_artists = "Unknown Artist",
}) {
  return `
    <a href="songPlayer.html?id=${id}" class="cursor-pointer" title="${title}">
      <div class="card rounded-md h-fit grid gap-2">
        <div>
          <img class="transition hover:opacity-75 rounded-md w-full h-[200px] bg-secondary aspect-square object-cover" src="${image}" alt="${title}" />
        </div>
        <div class="grid place-content-center text-center">
          <h1 class="text-sm text-ellipsis overflow-hidden max-w-[200px] font-bold">${song}</h1>
          <p class="text-xs text-ellipsis overflow-hidden -mt-[2px] max-w-[200px] mx-auto">${primary_artists}</p>
        </div>
      </div>
    </a>
  `;
}

function createArtistButton(artist) {
  const artistEncoded = encodeURIComponent(artist);
  return `
    <a href="search.html?q=${artistEncoded}" class="bg-gray-700 text-white text-xs font-semibold py-2 px-4 rounded-full hover:bg-gray-600 transition duration-300">
      ${artist}
    </a>
  `;
}

async function renderSongs() {
  const categories = await fetchSongs();

  const containerIds = ["trending", "search"];
  containerIds.forEach((id) => {
    const container = document.getElementById(id);
    if (container) {
      container.innerHTML = categories[id].map(createSongCard).join("");
    }
  });

  const artistsContainer = document.getElementById("artists");
  if (artistsContainer) {
    artistsContainer.innerHTML = categories.artists
      .map(createArtistButton)
      .join("");
  }

  document.getElementById("skeleton-loader").classList.add("hidden");
  document.getElementById("content").classList.remove("hidden");

  if (!categories.search.length) {
    document.getElementById("search-error-message").classList.remove("hidden");
    document.getElementById("artist-header").classList.add("hidden");
  }

  if (!categories.trending.length) {
    document.getElementById("trending-header").classList.add("hidden");
  }
}

window.addEventListener("load", renderSongs);
document.getElementById("hamburger")?.addEventListener("click", () => {
  document.getElementById("mobile-menu")?.classList.toggle("hidden");
});