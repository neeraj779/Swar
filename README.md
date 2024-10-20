<p align="center">
  <img src="./Swar.UI/assets/img/logo.png" width="170" />
</p>
<p align="center">
    <em> Your one-stop solution for amazing music experiences. </em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/neeraj779/Capstone-Project?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/neeraj779/Capstone-Project?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/neeraj779/Capstone-Project?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/neeraj779/Capstone-Project?style=flat&color=0080ff" alt="repo-language-count">
<p>

---

<p align="center">
<img src="https://img.shields.io/badge/GitHub%20Actions-2088FF.svg?style=flat&logo=GitHub-Actions&logoColor=white" alt="GitHub%20Actions">
</p>

[![CodeQL](https://github.com/neeraj779/Capstone-Project/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/neeraj779/Capstone-Project/actions/workflows/github-code-scanning/codeql)

[![Build and deploy .NET Core application to Web App SwarAPI](https://github.com/neeraj779/Capstone-Project/actions/workflows/SwarAPI.yml/badge.svg)](https://github.com/neeraj779/Capstone-Project/actions/workflows/SwarAPI.yml)

[![Build and deploy .NET Core application to Web App SongServiceAPI](https://github.com/neeraj779/Capstone-Project/actions/workflows/SongServiceAPI.yml/badge.svg)](https://github.com/neeraj779/Capstone-Project/actions/workflows/SongServiceAPI.yml)

---

## 🔗 Quick Links

> - [📍 Overview](#-overview)
> - [📦 Features](#-features)
> - [📂 Repository Structure](#-repository-structure)
> - [🚀 Getting Started](#-getting-started)
>   - [⚙️ Installation](#️-installation)
>   - [🤖 Running Swar](#-running-swar)
>   - [🧪 Tests](#-tests)
> - [📄 License](#-license)

---

## 📍 Overview

Swar is a music streaming platform that provides users with a wide range of music from different genres. Users can create playlists, like songs, and view their play history. The platform is designed to provide a seamless music experience to users.

---

## 📦 Features

- **User Authentication**: Users can register, login, and update their profile.

- **Playlist Management**: Users can create, update, and delete playlists.

- **Song Management**: Users can like songs and view their liked songs.

- **Play History**: Users can view their play history.

- **Search**: Users can search for songs.

- **Responsive UI**: The UI is responsive and works well on all devices.

- **Docker Support**: The API can be run in a Docker container.

---

## 📂 Repository Structure

```sh
└── Swar/
    ├── .github
    │   └── workflows
    │       ├── SongServiceAPI.yml
    │       └── SwarAPI.yml
    ├── LICENSE
    ├── README.md
    ├── SongService.API
    │   ├── Controllers
    │   │   └── SongsDataController.cs
    │   ├── Dockerfile
    │   ├── Exceptions
    │   │   ├── EntityNotFoundException.cs
    │   │   ├── InvalidQueryException.cs
    │   │   └── InvalidSongIdException.cs
    │   ├── Interfaces
    │   │   ├── ISongDataService.cs
    │   │   └── ISongProcessingService.cs
    │   ├── Models
    │   │   └── ErrorModel.cs
    │   ├── Program.cs
    │   ├── Properties
    │   │   └── launchSettings.json
    │   ├── Services
    │   │   ├── SongDataService.cs
    │   │   └── SongProcessingService.cs
    │   ├── SongService.API.csproj
    │   ├── SongService.API.xml
    │   ├── appsettings.Development.json
    │   └── appsettings.json
    ├── Swar.API
    │   ├── Contexts
    │   │   └── SwarContext.cs
    │   ├── Controllers
    │   │   ├── LikedSongsController.cs
    │   │   ├── PlayHistoryController.cs
    │   │   ├── PlaylistController.cs
    │   │   ├── PlaylistSongsController.cs
    │   │   └── UserController.cs
    │   ├── Dockerfile
    │   ├── Exceptions
    │   │   ├── EntityAlreadyExistsException.cs
    │   │   ├── EntityNotFoundException.cs
    │   │   ├── ExternalServiceLoginException.cs
    │   │   ├── InactiveAccountException.cs
    │   │   ├── InvalidCredentialsException.cs
    │   │   ├── InvalidRefreshTokenException.cs
    │   │   ├── UnableToAddException.cs
    │   │   └── WeakPasswordException.cs
    │   ├── Interfaces
    │   │   ├── Repositories
    │   │   │   ├── IPlaylistRepository.cs
    │   │   │   ├── IPlaylistSongsRepository.cs
    │   │   │   ├── IRepository.cs
    │   │   │   └── IUserRepository.cs
    │   │   └── Services
    │   │       ├── ILikedSongsService.cs
    │   │       ├── IPlayHistoryService.cs
    │   │       ├── IPlaylistService.cs
    │   │       ├── IPlaylistSongsService.cs
    │   │       ├── ITokenService.cs
    │   │       └── IUserService.cs
    │   ├── Migrations
    │   │   ├── 20240823131712_initial.Designer.cs
    │   │   ├── 20240823131712_initial.cs
    │   │   └── SwarContextModelSnapshot.cs
    │   ├── Models
    │   │   ├── DBModels
    │   │   │   ├── LikedSong.cs
    │   │   │   ├── PlayHistory.cs
    │   │   │   ├── Playlist.cs
    │   │   │   ├── PlaylistSong.cs
    │   │   │   └── User.cs
    │   │   ├── DTOs
    │   │   │   ├── AccessTokenDTO.cs
    │   │   │   ├── AddPlaylistDTO.cs
    │   │   │   ├── AddSongToPlaylistDTO.cs
    │   │   │   ├── LikedSongsReturnDTO.cs
    │   │   │   ├── LoginResultDTO.cs
    │   │   │   ├── PlaylistInfoDTO.cs
    │   │   │   ├── PlaylistSongsDTO.cs
    │   │   │   ├── PlaylistSongsReturnDTO.cs
    │   │   │   ├── RegisteredUserDTO.cs
    │   │   │   ├── ReturnPlaylistDTO.cs
    │   │   │   ├── SongsListDTO.cs
    │   │   │   ├── UpdatePlaylistDTO.cs
    │   │   │   ├── UpdatePlaylistPrivacyDTO.cs
    │   │   │   ├── UserLoginDTO.cs
    │   │   │   ├── UserPasswordUpdateDTO.cs
    │   │   │   ├── UserRegisterDTO.cs
    │   │   │   └── UserUpdateDTO.cs
    │   │   ├── ENUMs
    │   │   │   ├── UserRoleEnum.cs
    │   │   │   └── UserStatusEnum.cs
    │   │   └── ErrorModel.cs
    │   ├── Program.cs
    │   ├── Properties
    │   │   └── launchSettings.json
    │   ├── Repositories
    │   │   ├── AbstractRepository.cs
    │   │   ├── LikedSongsRepository.cs
    │   │   ├── PlayHistoryRepository.cs
    │   │   ├── PlaylistRepository.cs
    │   │   ├── PlaylistSongsRepository.cs
    │   │   └── UserRepository.cs
    │   ├── Services
    │   │   ├── LikedSongsService.cs
    │   │   ├── PlayHistoryService.cs
    │   │   ├── PlaylistService.cs
    │   │   ├── PlaylistSongsService.cs
    │   │   ├── TokenService.cs
    │   │   └── UserService.cs
    │   ├── Swar.API.csproj
    │   ├── Swar.API.xml
    │   ├── appsettings.Development.json
    │   ├── appsettings.json
    │   └── log4net.config
    ├── Swar.API.sln
    ├── Swar.UI
    │   ├── assets
    │   │   └── img
    │   │       ├── female_avatar.svg
    │   │       ├── lib-btn.svg
    │   │       ├── likedSong.png
    │   │       ├── logo.png
    │   │       ├── male_avatar.svg
    │   │       ├── neutral_avatar.png
    │   │       ├── playlist.png
    │   │       ├── profile.svg
    │   │       └── songLogo.avif
    │   ├── index.html
    │   ├── library.html
    │   ├── login.html
    │   ├── playlist.html
    │   ├── profile.html
    │   ├── public
    │   │   ├── Screenshot1.png
    │   │   ├── Screenshot2.png
    │   │   ├── android-chrome-192x192.png
    │   │   ├── android-chrome-512x512.png
    │   │   ├── apple-touch-icon-180x180.png
    │   │   ├── apple-touch-icon.png
    │   │   ├── browserconfig.xml
    │   │   ├── favicon-16x16.png
    │   │   ├── favicon-32x32.png
    │   │   ├── favicon.ico
    │   │   ├── icons-vector.svg
    │   │   ├── manifest.json
    │   │   ├── mstile-150x150.png
    │   │   └── robots.txt
    │   ├── register.html
    │   ├── search.html
    │   ├── songPlayer.html
    │   └── static
    │       ├── css
    │       │   ├── SongPlayer.css
    │       │   ├── alert.css
    │       │   ├── home.css
    │       │   ├── library.css
    │       │   ├── login.css
    │       │   ├── navbar.css
    │       │   └── validation.css
    │       └── js
    │           ├── SongPlayer.js
    │           ├── auth.js
    │           ├── common.js
    │           ├── crudService.js
    │           ├── home.js
    │           ├── installer.js
    │           ├── library.js
    │           ├── login.js
    │           ├── messages.js
    │           ├── navabar.js
    │           ├── playlist.js
    │           ├── profile.js
    │           ├── register.js
    │           ├── search.js
    │           ├── searchBox.js
    │           └── validation.js
    ├── Swar.UI.React
    │   ├── .gitignore
    │   ├── eslint.config.js
    │   ├── index.html
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── postcss.config.cjs
    │   ├── public
    │   │   ├── android-chrome-192x192.png
    │   │   ├── android-chrome-512x512.png
    │   │   ├── apple-touch-icon-180x180.png
    │   │   ├── apple-touch-icon.png
    │   │   ├── bg.png
    │   │   ├── browserconfig.xml
    │   │   ├── favicon-16x16.png
    │   │   ├── favicon-32x32.png
    │   │   ├── favicon.ico
    │   │   ├── icons-vector.svg
    │   │   ├── mockup-dark.png
    │   │   ├── mockup-light.png
    │   │   ├── mstile-150x150.png
    │   │   └── robots.txt
    │   ├── src
    │   │   ├── App.jsx
    │   │   ├── api
    │   │   │   └── axios.js
    │   │   ├── assets
    │   │   │   └── img
    │   │   │       ├── error-bad-request.svg
    │   │   │       ├── female-avatar.svg
    │   │   │       ├── heart.svg
    │   │   │       ├── lib-btn.svg
    │   │   │       ├── likedSong.png
    │   │   │       ├── logo.png
    │   │   │       ├── male-avatar.svg
    │   │   │       ├── neutral-avatar.svg
    │   │   │       ├── no-results.svg
    │   │   │       ├── playlist.svg
    │   │   │       ├── profile.svg
    │   │   │       └── songLogo.avif
    │   │   ├── components
    │   │   │   ├── ArtistButton.jsx
    │   │   │   ├── ArtistSkeleton.jsx
    │   │   │   ├── Error
    │   │   │   │   ├── BadRequestError.jsx
    │   │   │   │   ├── ErrorMessage.jsx
    │   │   │   │   └── NotResultError.jsx
    │   │   │   ├── Footer.jsx
    │   │   │   ├── Icons.jsx
    │   │   │   ├── InstallPWA.jsx
    │   │   │   ├── Layout.jsx
    │   │   │   ├── LikeButton
    │   │   │   │   ├── LikeButton.jsx
    │   │   │   │   └── likebutton.css
    │   │   │   ├── MiniPlayer.jsx
    │   │   │   ├── MobileNav.jsx
    │   │   │   ├── Navbar.jsx
    │   │   │   ├── PlayerSkeleton.jsx
    │   │   │   ├── PlaylistCard.jsx
    │   │   │   ├── PlaylistsSkeleton.jsx
    │   │   │   ├── ProfileSkeleton.jsx
    │   │   │   ├── SearchBar.jsx
    │   │   │   ├── SongCard.jsx
    │   │   │   ├── SongSkeleton.jsx
    │   │   │   └── modals
    │   │   │       ├── PlaylistInfoModal.jsx
    │   │   │       └── PlaylistModal.jsx
    │   │   ├── contexts
    │   │   │   └── PlayerContext.jsx
    │   │   ├── hooks
    │   │   │   ├── useApiClient.js
    │   │   │   ├── usePlayer.js
    │   │   │   ├── usePlaylistActions.js
    │   │   │   ├── usePlaylistActionsBase.js
    │   │   │   ├── usePlaylistInfo.js
    │   │   │   ├── usePlaylistSongs.js
    │   │   │   ├── useRecentlyPlayedSongs.js
    │   │   │   ├── useSearchData.js
    │   │   │   └── useUserPlaylistSongs.js
    │   │   ├── index.css
    │   │   ├── main.jsx
    │   │   ├── pages
    │   │   │   ├── Home.jsx
    │   │   │   ├── Landing.jsx
    │   │   │   ├── Library.jsx
    │   │   │   ├── Player.jsx
    │   │   │   ├── Playlist.jsx
    │   │   │   ├── Profile.jsx
    │   │   │   └── Search.jsx
    │   │   └── routes
    │   │       └── ProtectedRoute.jsx
    │   ├── tailwind.config.js
    │   ├── vercel.json
    │   └── vite.config.js
    ├── Swar.UnitTest
    │   ├── RepositoryUnitTest
    │   │   ├── LikedSongsRepositoryTests.cs
    │   │   ├── PlayHistoryRepositoryTests.cs
    │   │   ├── PlaylistRepositoryTests.cs
    │   │   ├── PlaylistSongsRepositoryTests.cs
    │   │   └── UserRepositoryTests.cs
    │   ├── ServiceUnitTest
    │   │   ├── LikedSongsServiceTests.cs
    │   │   ├── PlayHistoryServiceTests.cs
    │   │   ├── PlaylistServiceTests.cs
    │   │   ├── PlaylistSongsServiceTests.cs
    │   │   ├── TokenServiceTests.cs
    │   │   └── UserServiceTests.cs
    │   └── Swar.UnitTest.csproj
    └── docs
        ├── ERD.png
        └── RequirementsDoc.md
```

---

## 🚀 Getting Started

### ⚙️ Installation

1. Clone the Swar repository:

```sh
git clone https://github.com/neeraj779/Swar
```

2. Change to the project directory:

```sh
cd Swar/<project-directory>
```

3. Install the dependencies:

```sh
dotnet build
```

### 🤖 Running Swar

Use the following command to run Swar:

```sh
dotnet run
```

### 🧪 Tests

To execute tests, run:

```sh
dotnet test
```

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
