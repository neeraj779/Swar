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

<p>
<img src="https://img.shields.io/badge/GitHub%20Actions-2088FF.svg?style=flat&logo=GitHub-Actions&logoColor=white" alt="GitHub%20Actions">
</p>

[![CodeQL](https://github.com/neeraj779/Capstone-Project/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/neeraj779/Capstone-Project/actions/workflows/github-code-scanning/codeql)

[![Build and deploy .NET Core application to Web App SwarAPI](https://github.com/neeraj779/Capstone-Project/actions/workflows/SwarAPI.yml/badge.svg)](https://github.com/neeraj779/Capstone-Project/actions/workflows/SwarAPI.yml)

[![Build and deploy .NET Core application to Web App SongServiceAPI](https://github.com/neeraj779/Capstone-Project/actions/workflows/SongServiceAPI.yml/badge.svg)](https://github.com/neeraj779/Capstone-Project/actions/workflows/SongServiceAPI.yml)

## 🔗 Table of Contents

- [📍 Overview](#-overview)
- [👾 Features](#-features)
- [📁 Project Structure](#-project-structure)
  - [📂 Project Index](#-project-index)
- [🚀 Getting Started](#-getting-started)
  - [☑️ Prerequisites](#-prerequisites)
  - [⚙️ Installation](#-installation)
  - [🤖 Usage](#🤖-usage)
  - [🧪 Testing](#🧪-testing)
- [🎗 License](#-license)

---

## 📍 Overview

Swar is a music streaming platform that provides users with a wide range of music from different genres. Users can create playlists, like songs, and view their play history. The platform is designed to provide a seamless music experience to users.

---

## 👾 Features

|     |      Feature      | Summary                                                                                                                                                                                                                                                                                       |
| :-- | :---------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🔑  | **User Authentication**  | <ul><li>Users can register for an account with unique credentials.</li><li>Authenticated users can log in and update their profiles as needed.</li></ul>                                                                                    |
| 🎶  | **Playlist Management**  | <ul><li>Users have full control over their playlists, with options to create new playlists, edit existing ones, and delete playlists when no longer needed.</li></ul>                                                                                 |
| ❤️ | **Song Management**  | <ul><li>Users can view a detailed play history to keep track of recently played songs.</li></ul>                                                                    |
| 🕒   |  **Play History**   | <ul><li>Project is split into multiple sub-projects and services.</li><li>Clear separation between API and UI layers.</li><li>Modular structure supported by solution files and package management.</li></ul>                                                                                 |
| 🔍  |    **Search**    | <ul><li>Users can search for songs using keywords or other relevant metadata.</li></ul>                          |
| 📱 |  **Responsive UI**  | <ul><li>The user interface is designed to be responsive, ensuring a smooth experience on all screen sizes, from desktops to mobile devices.</li></ul>         |
| 🐳  |   **Docker Support**    | <ul><li>The API can be easily deployed within a Docker container, allowing for efficient setup and compatibility across diverse environments.</li></ul>                  |                                                     |

---

## 📁 Project Structure

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

### 📂 Project Index

<details open>
	<summary><b><code>SWAR/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API.sln'>Swar.API.sln</a></b></td>
				<td>- Serves as the configuration backbone for a multi-project Visual Studio solution, orchestrating the build and deployment settings for the Swar.API, Swar.UnitTest, and SongService.API projects<br>- It defines the solution's structure and manages the configurations across different environments, ensuring seamless integration and testing capabilities.</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- .github Submodule -->
		<summary><b>.github</b></summary>
		<blockquote>
			<details>
				<summary><b>workflows</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/.github/workflows/SwarAPI.yml'>SwarAPI.yml</a></b></td>
						<td>- Automates the continuous integration and deployment of a .NET Core application named SwarAPI to an Azure Web App upon updates to the main branch<br>- It includes steps for setting up the environment, building, testing, publishing, and deploying the application, ensuring streamlined updates and maintenance of the production environment.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/.github/workflows/SongServiceAPI.yml'>SongServiceAPI.yml</a></b></td>
						<td>- Build and deploy .NET Core application workflow automates the continuous integration and deployment of the SongServiceAPI to an Azure Web App<br>- Triggered by pushes to the main branch, it includes steps for setting up the environment, building, testing, publishing, and deploying the application, ensuring streamlined updates and maintenance of the service.</td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- SongService.API Submodule -->
		<summary><b>SongService.API</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/neeraj779/Swar/blob/master/SongService.API/appsettings.Development.json'>appsettings.Development.json</a></b></td>
				<td>- Configures development-specific settings for the SongService API, managing logging levels to optimize information visibility and error tracking<br>- It also secures communication and data access through a specified token key, ensuring that interactions with the API remain authenticated and authorized, thereby maintaining the integrity and security of the service in a development environment.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/neeraj779/Swar/blob/master/SongService.API/appsettings.json'>appsettings.json</a></b></td>
				<td>- Configures logging levels and specifies allowed hosts for the SongService.API, ensuring broad accessibility<br>- It also defines base URLs for various music-related APIs, including search, station creation, song suggestions, song details, album details, playlist information, and lyrics retrieval, centralizing external music data interactions for the application.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/neeraj779/Swar/blob/master/SongService.API/Program.cs'>Program.cs</a></b></td>
				<td>- Program.cs serves as the entry point for the SongService.API, configuring services, middleware, and the application's startup routine<br>- It sets up JWT authentication, Swagger documentation, CORS policies, and dependency injections for song data and processing services, facilitating secure and efficient API operations.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/neeraj779/Swar/blob/master/SongService.API/SongService.API.csproj'>SongService.API.csproj</a></b></td>
				<td>- Defines the configuration for the SongService.API project, specifying it as a web application targeting the .NET 6.0 framework<br>- It enables nullable reference types and implicit usings for streamlined code<br>- The project is prepared for Docker deployment on Linux and includes essential packages for JWT authentication, Azure integration, JSON processing, and API documentation with Swagger.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/neeraj779/Swar/blob/master/SongService.API/Dockerfile'>Dockerfile</a></b></td>
				<td>- Serves as the Docker configuration for the SongService.API, detailing the environment setup, dependencies management, and build processes for deployment<br>- It establishes a containerized application environment using .NET, optimizing the service for efficient debugging and deployment within a microservices architecture<br>- This setup ensures the API's scalability and maintainability across different development stages.</td>
			</tr>
			</table>
			<details>
				<summary><b>Exceptions</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/SongService.API/Exceptions/InvalidSongIdException.cs'>InvalidSongIdException.cs</a></b></td>
						<td>- Defines a custom exception, InvalidSongIdException, within the SongService.API's exception handling framework<br>- It specifically addresses scenarios where an invalid song identifier is used, enhancing error management and debugging capabilities by providing a clear, specific error message for such cases<br>- This exception aids in maintaining robustness and clarity in the service's operational flow.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/SongService.API/Exceptions/InvalidQueryException.cs'>InvalidQueryException.cs</a></b></td>
						<td>- InvalidQueryException, defined within the SongService.API's Exceptions directory, serves as a custom exception class for handling errors related to invalid queries in the API<br>- It enhances error management by providing a specific exception type that can be caught and handled distinctly, improving the robustness and clarity of error reporting in the service layer.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/SongService.API/Exceptions/EntityNotFoundException.cs'>EntityNotFoundException.cs</a></b></td>
						<td>- EntityNotFoundException within the SongService.API.Exceptions namespace defines a custom exception for handling scenarios where a requested entity is not found in the system<br>- It enhances error management by providing a clear, specific error message, either default or as specified, facilitating easier debugging and user feedback within the service architecture.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>Controllers</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/SongService.API/Controllers/SongsDataController.cs'>SongsDataController.cs</a></b></td>
						<td>Serves as the central interface for song-related data operations within the SongService API, handling tasks such as searching for songs, retrieving song suggestions, albums, playlists, and lyrics based on various identifiers and parameters, all while ensuring proper authorization and error handling.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>Models</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/SongService.API/Models/ErrorModel.cs'>ErrorModel.cs</a></b></td>
						<td>- ErrorModel in the SongService.API.Models namespace defines a model for error handling across the API<br>- It encapsulates error details, specifically the HTTP status code and a message, facilitating standardized error responses throughout the service<br>- This model ensures that all error communications are clear and consistent to API consumers.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>Services</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/SongService.API/Services/SongProcessingService.cs'>SongProcessingService.cs</a></b></td>
						<td>- SongProcessingService in the SongService.API module manages the formatting and processing of song, playlist, and album data<br>- It adjusts media URLs based on quality, decrypts URLs, and standardizes song information for consistency across the application, enhancing data presentation and accessibility.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/SongService.API/Services/SongDataService.cs'>SongDataService.cs</a></b></td>
						<td>- SongDataService in the SongService.API module interfaces with various music APIs to fetch, process, and return detailed song, album, and playlist data<br>- It handles tasks such as searching for songs, retrieving song suggestions, and extracting lyrics, ensuring robust error handling and data extraction from external music service responses.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>Properties</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/SongService.API/Properties/launchSettings.json'>launchSettings.json</a></b></td>
						<td>- Configures the launch settings for the SongService.API, specifying different profiles for project execution, including direct project launch, IIS Express, and Docker containerization<br>- Each profile sets up the environment, specifies URLs, and determines browser launch behavior, focusing on ease of development and testing with an emphasis on using Swagger UI for API interaction.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>Interfaces</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/SongService.API/Interfaces/ISongProcessingService.cs'>ISongProcessingService.cs</a></b></td>
						<td>- The ISongProcessingService interface in the SongService.API module defines methods for formatting song, album, and playlist data<br>- It ensures that these media types are processed into a consistent JSON format, facilitating their integration and manipulation across the broader system architecture, thereby enhancing data uniformity and accessibility.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/SongService.API/Interfaces/ISongDataService.cs'>ISongDataService.cs</a></b></td>
						<td>- Defines an interface for interacting with song-related data within the SongService.API<br>- It specifies methods for searching songs, retrieving song suggestions, fetching detailed song, album, and playlist information, obtaining unique identifiers from URLs, and accessing lyrics, enhancing the service's ability to provide comprehensive music data management.</td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- Swar.API Submodule -->
		<summary><b>Swar.API</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Swar.API.csproj'>Swar.API.csproj</a></b></td>
				<td>- Swar.API.csproj configures the foundational settings for a .NET 6.0 web application, enabling nullable reference types and implicit usings for streamlined coding<br>- It integrates essential packages for logging, authentication, database management, and API documentation, while also setting up a Docker environment for Linux deployment and organizing log storage.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/log4net.config'>log4net.config</a></b></td>
				<td>- Configures logging for the Swar.API, utilizing log4net to manage output to both a debug environment and a rolling file system<br>- It specifies formats for log messages and controls file size and backup behavior, ensuring comprehensive logging across different levels for effective debugging and monitoring of the application's operations.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/appsettings.Development.json'>appsettings.Development.json</a></b></td>
				<td>- Configures development-specific settings for the Swar.API, managing logging levels, database connections, and security tokens<br>- It sets informational logging as default, restricts Microsoft.AspNetCore logs to warnings, and defines SQL server connection parameters<br>- Additionally, it secures API access with unique keys for authentication and allows requests from all hosts.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/appsettings.json'>appsettings.json</a></b></td>
				<td>- Configures logging levels within the Swar.API application, setting a general information threshold for default logs and a higher warning level for Microsoft.AspNetCore specific logs<br>- This setup aids in filtering log output, enhancing the clarity and manageability of diagnostic data across the application's operational environment.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Program.cs'>Program.cs</a></b></td>
				<td>- Swar.API/Program.cs serves as the entry point for the Swar API, configuring services, middleware, and the application's startup routine<br>- It sets up JWT authentication, Swagger documentation, database contexts, and dependency injections for repositories and services, ensuring secure and efficient API operations.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Dockerfile'>Dockerfile</a></b></td>
				<td>- Swar.API/Dockerfile establishes the environment for building and deploying the Swar.API application<br>- It sets up a multi-stage Docker build process, leveraging Microsoft's .NET images to compile and publish the application, which is then prepared to run within a Docker container, exposing it on port 80.</td>
			</tr>
			</table>
			<details>
				<summary><b>Exceptions</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Exceptions/WeakPasswordException.cs'>WeakPasswordException.cs</a></b></td>
						<td>- Defines a custom exception, WeakPasswordException, within the Swar.API.Exceptions namespace to enforce strong password policies<br>- When triggered, it communicates that the provided password does not meet the required security standards, prompting users to choose a stronger password, thereby enhancing the application's security posture.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Exceptions/UnableToAddException.cs'>UnableToAddException.cs</a></b></td>
						<td>- Defines a custom exception, UnableToAddException, within the Swar.API.Exceptions namespace to handle errors specifically related to addition operations that fail<br>- It enhances error reporting by providing a default error message and supports customization through message parameterization, improving the robustness of error handling in the application.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Exceptions/InvalidCredentialsException.cs'>InvalidCredentialsException.cs</a></b></td>
						<td>- InvalidCredentialsException.cs defines a custom exception within the Swar.API.Exceptions namespace, specifically for handling authentication errors when user credentials are incorrect<br>- It enhances error management by providing a clear, specific error message, thereby improving the debugging and user authentication processes within the application's architecture.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Exceptions/ExternalServiceLoginException.cs'>ExternalServiceLoginException.cs</a></b></td>
						<td>- Swar.API/Exceptions/ExternalServiceLoginException.cs defines a custom exception to handle scenarios where a user attempts to log in without using the external authentication service initially used to create their account<br>- It ensures users are informed about the correct authentication method required, enhancing security and user experience within the application.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Exceptions/InvalidRefreshTokenException.cs'>InvalidRefreshTokenException.cs</a></b></td>
						<td>- InvalidRefreshTokenException.cs defines a custom exception within the Swar.API.Exceptions namespace, specifically for handling scenarios where an invalid refresh token is detected<br>- It extends the base Exception class, providing a predefined error message to improve error handling and debugging processes across the API.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Exceptions/EntityAlreadyExistsException.cs'>EntityAlreadyExistsException.cs</a></b></td>
						<td>- Defines a custom exception, `EntityAlreadyExistsException`, used throughout the Swar.API to handle scenarios where an attempt is made to add a duplicate entity to the database<br>- It enhances error handling by providing tailored messages and, in specific cases, associating the error with a user ID for better traceability.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Exceptions/EntityNotFoundException.cs'>EntityNotFoundException.cs</a></b></td>
						<td>- Defines a custom exception, `EntityNotFoundException`, used throughout the Swar.API to handle scenarios where a requested entity does not exist in the system<br>- This exception enriches error handling by providing a clear and specific error message, improving the robustness and maintainability of the application's error management architecture.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Exceptions/InactiveAccountException.cs'>InactiveAccountException.cs</a></b></td>
						<td>- Defines a custom exception, InactiveAccountException, within the Swar.API.Exceptions namespace to handle scenarios where operations involve inactive user accounts<br>- It enhances error handling by providing a specific exception for inactive accounts, allowing for clearer debugging and user feedback mechanisms in the application's error management system.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>Controllers</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Controllers/LikedSongsController.cs'>LikedSongsController.cs</a></b></td>
						<td>- Manages user interactions with their liked songs through a RESTful API, enabling operations such as adding, removing, retrieving, and checking liked songs<br>- It handles various exceptions to ensure robust error management and secure access, requiring user authentication for all operations.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Controllers/PlaylistSongsController.cs'>PlaylistSongsController.cs</a></b></td>
						<td>- Manages interactions with playlist songs, including adding and removing songs from playlists, and retrieving all songs within a specific or all playlists<br>- It handles various exceptions and authorizes access based on user roles, ensuring secure and efficient management of playlist content.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Controllers/PlayHistoryController.cs'>PlayHistoryController.cs</a></b></td>
						<td>- PlayHistoryController manages song playback history within the Swar.API, facilitating the logging and retrieval of song play data for users<br>- It supports operations to log individual song plays, fetch play history for a specific user, and retrieve play histories across all users, ensuring role-based access control.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Controllers/UserController.cs'>UserController.cs</a></b></td>
						<td>- Manages user interactions within the application, handling tasks such as user registration, login, token refresh, and user profile management<br>- It provides endpoints for user authentication, account updates, and administrative actions like user activation and deactivation, ensuring secure and efficient user management.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Controllers/PlaylistController.cs'>PlaylistController.cs</a></b></td>
						<td>- Manages playlist operations within the application, enabling users and admins to create, delete, update, and retrieve playlists<br>- It handles user authentication and authorization, ensuring secure access to playlist functionalities based on user roles, and provides robust error handling for various exceptions.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>Models</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Models/ErrorModel.cs'>ErrorModel.cs</a></b></td>
						<td>- ErrorModel, located within the Swar.API/Models directory, serves as a standardized response structure for error handling across the API<br>- It encapsulates error details, specifically the HTTP status code and a descriptive message, facilitating consistent error reporting and client-side error handling throughout the application's architecture.</td>
					</tr>
					</table>
					<details>
						<summary><b>DTOs</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Models/DTOs/UserPasswordUpdateDTO.cs'>UserPasswordUpdateDTO.cs</a></b></td>
								<td>- UserPasswordUpdateDTO serves as a data transfer object within the Swar.API's model layer, specifically facilitating the update of user passwords<br>- It ensures that both old and new passwords are provided by enforcing validation rules, thereby supporting secure and effective user authentication processes across the application.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Models/DTOs/PlaylistSongsReturnDTO.cs'>PlaylistSongsReturnDTO.cs</a></b></td>
								<td>- PlaylistSongsReturnDTO serves as a data transfer object in the Swar.API project, facilitating the encapsulation and transfer of essential data between layers<br>- It specifically manages the relationship between playlists and songs by holding identifiers for both, thus supporting operations related to querying or manipulating user playlists and their associated songs.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Models/DTOs/UserUpdateDTO.cs'>UserUpdateDTO.cs</a></b></td>
								<td>- UserUpdateDTO serves as a data transfer object in the Swar.API project, facilitating the safe and validated updating of user profiles<br>- It ensures that updates to user names, emails, and genders adhere to specific format and length constraints, enhancing data integrity and user experience across the system.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Models/DTOs/ReturnPlaylistDTO.cs'>ReturnPlaylistDTO.cs</a></b></td>
								<td>- ReturnPlaylistDTO serves as a data transfer object in the Swar.API project, encapsulating playlist information for communication between the server and clients<br>- It includes details such as user and playlist identifiers, ownership, privacy settings, and metadata, facilitating efficient data handling and response structuring within the application's service layer.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Models/DTOs/RegisteredUserDTO.cs'>RegisteredUserDTO.cs</a></b></td>
								<td>- RegisteredUserDTO serves as a data transfer object within the Swar.API project, encapsulating user registration details such as user ID, external ID, name, email, role, status, and registration date<br>- It facilitates the efficient transfer of user data between processes and layers in the application, ensuring data integrity and simplifying interactions with user information.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Models/DTOs/PlaylistInfoDTO.cs'>PlaylistInfoDTO.cs</a></b></td>
								<td>- PlaylistInfoDTO, extending ReturnPlaylistDTO within the Swar.API's Models.DTOs namespace, enriches playlist data by including a count of songs<br>- It serves as a data transfer object that facilitates the delivery of playlist information, including song totals, to client applications, enhancing data interaction and user interface capabilities in the broader system architecture.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Models/DTOs/UserRegisterDTO.cs'>UserRegisterDTO.cs</a></b></td>
								<td>- UserRegisterDTO serves as a data transfer object in the Swar.API project, facilitating the registration process by encapsulating user details<br>- It ensures that essential fields such as name and email are not only present but also adhere to specified validation rules, enhancing data integrity and user management within the system.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Models/DTOs/LoginResultDTO.cs'>LoginResultDTO.cs</a></b></td>
								<td>- LoginResultDTO serves as a data transfer object within the Swar.API project, encapsulating authentication details such as access and refresh tokens, user role, and token type<br>- It facilitates secure data exchange between the client and server during authentication processes, ensuring that user credentials are handled efficiently and securely across the system.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Models/DTOs/SongsListDTO.cs'>SongsListDTO.cs</a></b></td>
								<td>- Swar.API/Models/DTOs/SongsListDTO.cs defines a data transfer object that encapsulates a user's song list, including the user's ID, the total count of songs, and a list of song titles<br>- This DTO supports operations related to retrieving and displaying song collections in the system, facilitating data handling and transmission between processes.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Models/DTOs/UserLoginDTO.cs'>UserLoginDTO.cs</a></b></td>
								<td>- UserLoginDTO serves as a data transfer object in the Swar.API project, specifically designed to handle user authentication processes<br>- It enforces validation rules for user credentials, ensuring that both email and password inputs meet specific security and format standards essential for maintaining system integrity and user data safety.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Models/DTOs/AddPlaylistDTO.cs'>AddPlaylistDTO.cs</a></b></td>
								<td>- AddPlaylistDTO serves as a data transfer object in the Swar.API project, facilitating the creation of new playlists<br>- It ensures that essential playlist details such as name and privacy settings are correctly provided and validated, enhancing data integrity and user experience across the application's playlist management features.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Models/DTOs/UpdatePlaylistPrivacyDTO.cs'>UpdatePlaylistPrivacyDTO.cs</a></b></td>
								<td>- UpdatePlaylistPrivacyDTO serves as a data transfer object within the Swar.API's Models layer, specifically designed to manage the privacy settings of playlists<br>- It encapsulates a single property, IsPrivate, which indicates whether a playlist should be private or public, facilitating the modification of playlist visibility across the application's services.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Models/DTOs/UpdatePlaylistDTO.cs'>UpdatePlaylistDTO.cs</a></b></td>
								<td>- UpdatePlaylistDTO serves as a data transfer object in the Swar.API project, specifically designed for updating playlist information<br>- It enforces validation rules ensuring that the playlist name is mandatory and restricts its length to between 1 and 100 characters, while also allowing an optional description field.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Models/DTOs/AddSongToPlaylistDTO.cs'>AddSongToPlaylistDTO.cs</a></b></td>
								<td>- AddSongToPlaylistDTO serves as a data transfer object in the Swar.API project, facilitating the addition of songs to playlists<br>- It ensures that both PlaylistId and SongId are provided and validates the length of SongId, enhancing data integrity and interaction between the user interface and server.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Models/DTOs/AccessTokenDTO.cs'>AccessTokenDTO.cs</a></b></td>
								<td>- AccessTokenDTO.cs defines a data transfer object used within the Swar.API to encapsulate details about an access token<br>- It primarily serves to facilitate the secure transmission of authentication information between the server and clients, ensuring that sensitive data is handled appropriately within the system's security protocols.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Models/DTOs/PlaylistSongsDTO.cs'>PlaylistSongsDTO.cs</a></b></td>
								<td>- PlaylistSongsDTO serves as a data transfer object within the Swar.API, encapsulating playlist information alongside a list of songs<br>- It bridges the communication between the client and server by structuring playlist data, including metadata and associated songs, to facilitate efficient data handling and operations within the application's service architecture.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Models/DTOs/LikedSongsReturnDTO.cs'>LikedSongsReturnDTO.cs</a></b></td>
								<td>- Defines a data transfer object, LikedSongsReturnDTO, used to encapsulate details about user song preferences within the Swar.API<br>- It includes properties for user identification, song identification, and the date the song was liked, facilitating the efficient transfer and handling of liked song data across different components of the application.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>DBModels</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Models/DBModels/PlaylistSong.cs'>PlaylistSong.cs</a></b></td>
								<td>- Defines the relationship between playlists and songs within the Swar.API project, facilitating the management of which songs belong to specific playlists<br>- The PlaylistSong model includes identifiers for both the playlist and the song, ensuring a structured link that supports operations like playlist creation, modification, and song assignment in the database.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Models/DBModels/Playlist.cs'>Playlist.cs</a></b></td>
								<td>- Defines the Playlist model within the Swar.API's database architecture, representing the structure for storing playlist data<br>- It includes properties such as playlist ID, name, description, visibility, creation date, and associated user details<br>- It also manages relationships with the User model and the PlaylistSong collection, facilitating data interaction and integrity within the application.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Models/DBModels/User.cs'>User.cs</a></b></td>
								<td>- Defines the User model within the Swar.API's database architecture, encapsulating essential user attributes such as identification, authentication details, and role<br>- It also links to related entities like playlists, liked songs, and play histories, facilitating user interactions and data retrieval across the system's music streaming functionalities.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Models/DBModels/LikedSong.cs'>LikedSong.cs</a></b></td>
								<td>- Defines the LikedSong model within the Swar.API's database architecture, representing user song preferences<br>- Each LikedSong entry includes a unique identifier, song ID, the date it was liked, and associated user details, linking to the User model to maintain relational integrity and facilitate user-specific data retrieval and management in the application.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Models/DBModels/PlayHistory.cs'>PlayHistory.cs</a></b></td>
								<td>- PlayHistory.cs defines a data model essential for tracking user interactions with songs within the Swar.API application<br>- It records each song play, noting the song identifier, play time, and the associated user<br>- This model supports features related to user activity history and analytics, enhancing personalized user experiences and data-driven decision-making in the application.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>ENUMs</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Models/ENUMs/UserRoleEnum.cs'>UserRoleEnum.cs</a></b></td>
								<td>- Defines user roles within the Swar.API application, specifically categorizing roles as 'Admin' and 'User'<br>- This classification is crucial for managing access permissions and functionalities across different parts of the system, ensuring that users have appropriate rights based on their role, thereby supporting secure and efficient operation of the platform.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Models/ENUMs/UserStatusEnum.cs'>UserStatusEnum.cs</a></b></td>
								<td>- Defines the `UserStatusEnum` within the Swar.API's Models.ENUMs namespace, which categorizes user states into `Active` and `Inactive`<br>- This enumeration is crucial for managing user lifecycle and status across the application, ensuring that system interactions and access controls are appropriately aligned with the user's current state.</td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>Migrations</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Migrations/20240823131712_initial.Designer.cs'>20240823131712_initial.Designer.cs</a></b></td>
						<td>- Defines the initial database schema for the Swar API, setting up entities such as Users, LikedSongs, PlayHistories, Playlists, and PlaylistSongs<br>- It configures relationships, primary keys, and unique constraints to ensure data integrity and supports the PostgreSQL database using Entity Framework Core migrations.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Migrations/SwarContextModelSnapshot.cs'>SwarContextModelSnapshot.cs</a></b></td>
						<td>- SwarContextModelSnapshot.cs captures the current state of the database model for the Swar API, detailing the structure and relationships of entities such as users, playlists, songs, and their interactions<br>- It ensures the database schema is consistently replicated during migrations, aiding in database version control and updates.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Migrations/20240823131712_initial.cs'>20240823131712_initial.cs</a></b></td>
						<td>- Establishes the foundational database schema for the Swar.API project by creating tables for Users, LikedSongs, PlayHistories, Playlists, and PlaylistSongs<br>- It includes relationships and constraints to manage user interactions with songs and playlists, ensuring data integrity and supporting essential features like user management and music tracking.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>Services</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Services/PlaylistSongsService.cs'>PlaylistSongsService.cs</a></b></td>
						<td>- Manages interactions with playlist songs, including adding, removing, and retrieving songs within user-specific playlists<br>- Ensures user and playlist validation, handles exceptions for duplicate entries or unauthorized access, and logs activities for monitoring purposes<br>- Converts data between database models and transfer objects for external communication.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Services/LikedSongsService.cs'>LikedSongsService.cs</a></b></td>
						<td>- LikedSongsService in Swar.API manages user interactions with liked songs, facilitating the addition and removal of songs to a user's liked list, retrieving all liked songs for a user, and checking if a song is already liked by the user<br>- It ensures operations respect user account status and logs activities for monitoring.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Services/PlayHistoryService.cs'>PlayHistoryService.cs</a></b></td>
						<td>- PlayHistoryService in Swar.API manages user song play histories, facilitating logging of song plays and retrieval of song history per user<br>- It ensures only active users can interact with their history, supports fetching unique song plays, and aggregates play histories across all users, enhancing user engagement and service personalization.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Services/UserService.cs'>UserService.cs</a></b></td>
						<td>- UserService.cs manages user-related operations within the Swar.API project, including user authentication, registration, and profile management<br>- It interfaces with repositories to access user data, utilizes token services for authentication, and logs activities for security and monitoring purposes<br>- This service ensures secure user management and facilitates user interactions with the system.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Services/TokenService.cs'>TokenService.cs</a></b></td>
						<td>- TokenService in Swar.API/Services manages the creation of JWT tokens for user authentication, distinguishing between access and refresh tokens with configurable expirations<br>- It utilizes security keys derived from configuration settings to sign tokens, ensuring secure claims management for user identification and authorization purposes.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Services/PlaylistService.cs'>PlaylistService.cs</a></b></td>
						<td>- PlaylistService in Swar.API manages playlist operations, including creation, deletion, and updates for playlists<br>- It interfaces with repositories to handle data retrieval and persistence, ensuring user authorization and logging actions for auditability<br>- This service also transforms data into DTOs for consistent client responses.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>Properties</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Properties/launchSettings.json'>launchSettings.json</a></b></td>
						<td>- Defines configuration settings for launching the Swar.API project across different environments and platforms, including direct project execution, IIS Express, and Docker<br>- It specifies startup URLs, environment variables, and server details to streamline development and testing phases by setting up a consistent, accessible API documentation interface via Swagger.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>Repositories</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Repositories/LikedSongsRepository.cs'>LikedSongsRepository.cs</a></b></td>
						<td>- LikedSongsRepository, located within the Swar.API/Repositories directory, serves as a specialized data access layer for managing 'LikedSong' entities<br>- It extends the functionality of AbstractRepository, leveraging the SwarContext to perform operations specific to liked songs in the database, thereby supporting features related to user preferences in music within the application's architecture.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Repositories/PlaylistSongsRepository.cs'>PlaylistSongsRepository.cs</a></b></td>
						<td>- PlaylistSongsRepository in Swar.API manages interactions with playlist-song relationships within the database<br>- It facilitates the retrieval and deletion of specific songs from playlists using composite keys<br>- This repository extends the base functionality to handle operations specific to the PlaylistSong model, ensuring efficient data management and integrity in the application's music management features.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Repositories/PlayHistoryRepository.cs'>PlayHistoryRepository.cs</a></b></td>
						<td>- PlayHistoryRepository serves as a specialized data access layer within the Swar.API, managing interactions with the PlayHistory database model<br>- It extends the functionality of a generic repository by providing a context-specific interface for querying and manipulating play history records, thereby supporting the application's ability to track and analyze user playback activities efficiently.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Repositories/PlaylistRepository.cs'>PlaylistRepository.cs</a></b></td>
						<td>- PlaylistRepository, part of Swar.API's repository layer, manages data interactions for Playlist entities within the database<br>- It extends the functionality of a generic repository by implementing the IPlaylistRepository interface, specifically adding the capability to retrieve playlists based on a unique public identifier<br>- This class plays a crucial role in abstracting and encapsulating database access for playlists in the application.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Repositories/AbstractRepository.cs'>AbstractRepository.cs</a></b></td>
						<td>- AbstractRepository.cs serves as a foundational class for data access operations within the Swar.API project<br>- It implements generic CRUD functionalities for entities, leveraging the SwarContext and DbSet from Entity Framework<br>- This class ensures efficient data manipulation and exception handling, facilitating the development of specific repositories by extending its capabilities.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Repositories/UserRepository.cs'>UserRepository.cs</a></b></td>
						<td>- UserRepository.cs serves as a specialized data access layer within the Swar.API, managing interactions with user data stored in the database<br>- It extends the functionality of a generic repository by providing a method to retrieve user details based on email, leveraging the Entity Framework for querying the database efficiently.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>Contexts</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Contexts/SwarContext.cs'>SwarContext.cs</a></b></td>
						<td>- SwarContext serves as the data access layer within the Swar.API, managing interactions with the database<br>- It defines the schema for users, playlists, liked songs, play histories, and playlist songs, ensuring relationships and constraints like unique indices and composite keys are properly configured to maintain data integrity and optimize database operations.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>Interfaces</b></summary>
				<blockquote>
					<details>
						<summary><b>Services</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Interfaces/Services/IPlaylistService.cs'>IPlaylistService.cs</a></b></td>
								<td>- IPlaylistService serves as a contract within the Swar.API project, outlining operations for managing playlists<br>- It defines methods for adding, retrieving, updating, and deleting playlists, both individually and in bulk, based on user identity<br>- This interface ensures consistent implementation of playlist management functionalities across various service components in the application.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Interfaces/Services/IPlayHistoryService.cs'>IPlayHistoryService.cs</a></b></td>
								<td>- IPlayHistoryService, defined within the Swar.API project, outlines methods essential for managing user song play histories<br>- It enables logging individual song plays, retrieving a user's song history with options for uniqueness, and fetching play histories across all users, facilitating personalized user experiences and data analytics within the application's service architecture.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Interfaces/Services/ITokenService.cs'>ITokenService.cs</a></b></td>
								<td>- ITokenService, located within the Swar.API/Interfaces/Services directory, defines a contract for generating JWT tokens<br>- It specifies a method to create a JWT token based on a user's details and a specified token type, ensuring secure and authenticated interactions within the application's services<br>- This interface is crucial for managing authentication across the system.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Interfaces/Services/IUserService.cs'>IUserService.cs</a></b></td>
								<td>- Defines the contract for user-related operations within the Swar.API, outlining methods for user authentication, registration, and management<br>- It includes functionalities for logging in, registering, refreshing tokens, retrieving, updating, and deleting user profiles, as well as activating and deactivating users by administrators.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Interfaces/Services/ILikedSongsService.cs'>ILikedSongsService.cs</a></b></td>
								<td>- ILikedSongsService, located within the Swar.API project, defines operations for managing a user's liked songs<br>- It supports adding and removing songs from a user's liked list, retrieving all liked songs, and checking if a specific song is liked by a user, facilitating personalized user interactions within the application's music service features.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Interfaces/Services/IPlaylistSongsService.cs'>IPlaylistSongsService.cs</a></b></td>
								<td>- IPlaylistSongsService defines the contract for managing songs within playlists in the Swar.API project<br>- It specifies methods for adding and removing songs from playlists, as well as retrieving all songs within a user's specific playlist or across all playlists, ensuring interactions are tailored to user permissions and playlist ownership.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Repositories</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Interfaces/Repositories/IPlaylistSongsRepository.cs'>IPlaylistSongsRepository.cs</a></b></td>
								<td>- Defines the interface for interacting with playlist-song relationships in the database, specifically within the Swar.API project<br>- It extends a generic repository interface, adding functionality to retrieve and delete a song from a playlist using a composite key of playlist and song identifiers, ensuring efficient management of song associations within playlists.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Interfaces/Repositories/IPlaylistRepository.cs'>IPlaylistRepository.cs</a></b></td>
								<td>- Defines an interface for playlist repository operations within the Swar.API application, extending the generic repository capabilities specifically for Playlist objects<br>- It includes a method to retrieve playlists based on a unique public identifier, ensuring that playlist management can be handled efficiently and consistently across the application's data access layer.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Interfaces/Repositories/IUserRepository.cs'>IUserRepository.cs</a></b></td>
								<td>- Defines an interface for user repository operations within the Swar.API project, extending a generic repository interface<br>- It specifies a method for retrieving a user by their email, ensuring that user management functionalities can interact seamlessly with the database to access user-specific data, crucial for authentication and user profile management tasks.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.API/Interfaces/Repositories/IRepository.cs'>IRepository.cs</a></b></td>
								<td>- Defines a generic repository interface within the Swar.API project, specifying common data operations such as add, update, delete, and retrieval for entities<br>- This interface ensures consistent implementation across different data models, facilitating easier maintenance and scalability of the data access layer within the application's architecture.</td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- Swar.UnitTest Submodule -->
		<summary><b>Swar.UnitTest</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UnitTest/Swar.UnitTest.csproj'>Swar.UnitTest.csproj</a></b></td>
				<td>- Swar.UnitTest.csproj configures a .NET 6.0 project specifically for unit testing within the Swar software architecture<br>- It integrates essential testing frameworks and libraries such as NUnit, Moq, and Microsoft.EntityFrameworkCore.InMemory to facilitate robust testing practices<br>- Additionally, it references the Swar.API project, ensuring that API functionalities are thoroughly tested against the unit tests defined.</td>
			</tr>
			</table>
			<details>
				<summary><b>RepositoryUnitTest</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UnitTest/RepositoryUnitTest/PlaylistSongsRepositoryTests.cs'>PlaylistSongsRepositoryTests.cs</a></b></td>
						<td>- PlaylistSongsRepositoryTests.cs conducts comprehensive testing of the PlaylistSongsRepository's functionalities, ensuring correct behavior in adding, retrieving, updating, and deleting playlist-song associations within a simulated database environment<br>- It validates the repository's handling of normal operations and exception scenarios to maintain data integrity and reliability.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UnitTest/RepositoryUnitTest/LikedSongsRepositoryTests.cs'>LikedSongsRepositoryTests.cs</a></b></td>
						<td>- Validates the functionality of the LikedSongsRepository within the Swar.UnitTest suite, ensuring it correctly handles CRUD operations for liked songs<br>- Tests cover scenarios including adding, retrieving, updating, and deleting liked songs, as well as handling exceptions for duplicate entries and non-existent records.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UnitTest/RepositoryUnitTest/PlaylistRepositoryTests.cs'>PlaylistRepositoryTests.cs</a></b></td>
						<td>- PlaylistRepositoryTests.cs serves as a comprehensive test suite for validating the functionality of the PlaylistRepository within the Swar.UnitTest project<br>- It ensures the repository correctly handles CRUD operations for playlist entities, including adding, retrieving, updating, and deleting playlists, as well as managing exceptions and validating entity existence.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UnitTest/RepositoryUnitTest/UserRepositoryTests.cs'>UserRepositoryTests.cs</a></b></td>
						<td>- UserRepositoryTests.cs serves as a comprehensive test suite for validating the functionality of the UserRepository class within the Swar.UnitTest project<br>- It ensures that user management operations such as add, delete, update, and retrieval by ID or email are correctly implemented and handle exceptions as expected.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UnitTest/RepositoryUnitTest/PlayHistoryRepositoryTests.cs'>PlayHistoryRepositoryTests.cs</a></b></td>
						<td>- PlayHistoryRepositoryTests.cs serves as a comprehensive test suite for validating the functionality of the PlayHistoryRepository within the Swar API<br>- It ensures that operations such as adding, retrieving, updating, and deleting play history records in the database behave as expected, handling both normal and exceptional cases effectively.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>ServiceUnitTest</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UnitTest/ServiceUnitTest/PlayHistoryServiceTests.cs'>PlayHistoryServiceTests.cs</a></b></td>
						<td>- PlayHistoryServiceTests.cs conducts a series of unit tests for the PlayHistoryService within the Swar application, ensuring functionality such as logging and retrieving song play history operates correctly under various user conditions<br>- It validates service responses to active, inactive, and non-existent users, emphasizing robustness and error handling in user interactions.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UnitTest/ServiceUnitTest/UserServiceTests.cs'>UserServiceTests.cs</a></b></td>
						<td>- UserServiceTests.cs conducts comprehensive unit testing for the UserService, ensuring functionality such as user authentication, registration, and management operations perform as expected<br>- It validates scenarios including valid inputs, error handling for invalid credentials, and user status changes, thereby confirming the robustness of user-related functionalities within the system.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UnitTest/ServiceUnitTest/TokenServiceTests.cs'>TokenServiceTests.cs</a></b></td>
						<td>- TokenServiceTests.cs is dedicated to verifying the functionality of the TokenService within the Swar.UnitTest project<br>- It focuses on ensuring that JWT tokens are correctly generated and validated for users, handling both access and refresh tokens, and confirming the integrity and claims of the tokens produced.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UnitTest/ServiceUnitTest/PlaylistSongsServiceTests.cs'>PlaylistSongsServiceTests.cs</a></b></td>
						<td>- PlaylistSongsServiceTests.cs serves as a test suite for validating the functionality of the PlaylistSongsService within the Swar application<br>- It ensures that operations such as adding, retrieving, and removing songs from playlists behave as expected under various scenarios, including handling valid inputs, duplicate entries, and unauthorized access attempts.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UnitTest/ServiceUnitTest/PlaylistServiceTests.cs'>PlaylistServiceTests.cs</a></b></td>
						<td>- PlaylistServiceTests.cs conducts comprehensive unit testing for the PlaylistService within the Swar application, ensuring functionality such as adding, deleting, updating, and retrieving playlists operates correctly under various conditions<br>- It validates business logic adherence, exception handling, and user authorization, crucial for maintaining robust service operations.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UnitTest/ServiceUnitTest/LikedSongsServiceTests.cs'>LikedSongsServiceTests.cs</a></b></td>
						<td>- LikedSongsServiceTests.cs conducts unit tests for the LikedSongsService within the Swar.UnitTest project, ensuring functionality such as adding, removing, and querying liked songs operates correctly<br>- It validates service responses under various scenarios including valid operations, user or song not found, and account status issues, using an in-memory database for isolated testing environments.</td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- Swar.UI.React Submodule -->
		<summary><b>Swar.UI.React</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/package-lock.json'>package-lock.json</a></b></td>
				<td>- The file `package-lock.json` located in the `Swar.UI.React` directory plays a crucial role in managing the dependencies of the Swar project's React-based user interface<br>- This file ensures that the exact versions of the libraries and frameworks specified are installed, thereby preventing discrepancies that could arise from version mismatches in different development environments<br>- It includes dependencies crucial for authentication, UI components, HTTP requests, animations, and icons, which are essential for building a consistent and interactive user interface.

This file is integral to the project as it supports the stability and reproducibility of the environment across different setups, which is vital for collaborative development and maintaining the project's integrity over time<br>- By locking down the versions of each package, the project minimizes issues related to upgrades and compatibility, ensuring that all contributors are working with a set of well-defined and tested libraries.</td>

</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/vercel.json'>vercel.json</a></b></td>
<td>- Configures URL routing for the Swar.UI.React application within the Vercel hosting environment by redirecting all traffic to a single entry point<br>- This setup facilitates the implementation of a Single Page Application (SPA) architecture, ensuring smoother user navigation and interaction by handling routing client-side rather than server-side.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/tailwind.config.js'>tailwind.config.js</a></b></td>
<td>- Tailwind.config.js configures Tailwind CSS for the Swar.UI.React project, specifying content sources and extending themes with custom properties like minimum heights and colors<br>- It integrates the NextUI plugin to enhance UI components and supports dark mode, aligning with modern web design practices for a cohesive and customizable user interface.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/vite.config.js'>vite.config.js</a></b></td>
<td>- Configures the Vite build setup for the Swar.UI.React project, integrating React and progressive web app (PWA) capabilities<br>- It specifies a manifest for PWA, detailing app icons, screenshots, and theme settings to enhance user experience on mobile devices<br>- This setup ensures that Swar operates as a standalone application with auto-updating features.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/package.json'>package.json</a></b></td>
<td>- Serves as the configuration backbone for the Swar UI React application, defining project dependencies and scripts essential for development, building, and testing<br>- It integrates various libraries for UI components, animations, and state management, ensuring a robust setup for scalable and maintainable code<br>- Additionally, it configures development tools for code quality and performance optimization.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/index.html'>index.html</a></b></td>
<td>- Serves as the entry point for the Swar UI React application, setting up the foundational HTML structure and linking to the main React component<br>- It configures the viewport and character set for proper display on various devices, and initializes the React application by connecting the root element to the React components defined in main.jsx.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/postcss.config.cjs'>postcss.config.cjs</a></b></td>
<td>- Configures PostCSS to use TailwindCSS and Autoprefixer as plugins within the Swar.UI.React component of the project<br>- This setup enhances CSS by enabling utility-first styling with TailwindCSS and ensuring cross-browser compatibility with Autoprefixer, streamlining the development process for building responsive and visually consistent user interfaces.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/eslint.config.js'>eslint.config.js</a></b></td>
<td>- Swar.UI.React/eslint.config.js configures ESLint for JavaScript and JSX files in the project, excluding the 'dist' directory<br>- It sets up language options for ECMAScript 2020, enables JSX, and applies recommended rules from various plugins including React and React Hooks<br>- It also customizes specific rules for better handling of React features and refresh mechanisms.</td>
</tr>
</table>
<details>
<summary><b>src</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/index.css'>index.css</a></b></td>
<td>- Swar.UI.React/src/index.css establishes the foundational styles for the Swar UI React project<br>- It integrates the Poppins font from Google Fonts and configures Tailwind CSS for base, components, and utilities<br>- Additionally, it customizes the body's typography and hides scrollbars in elements with the .hide-scrollbar class, enhancing the user interface's visual cleanliness.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/App.jsx'>App.jsx</a></b></td>
<td>- App.jsx serves as the central routing hub for the Swar.UI.React application, orchestrating navigation and layout management<br>- It integrates various pages like Home, Player, and Search within a structured layout, utilizing protected routes for user-specific content<br>- The application's visual consistency and user feedback mechanisms are maintained through theming and toast notifications.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/main.jsx'>main.jsx</a></b></td>
<td>- Main.jsx serves as the entry point for the Swar.UI.React application, initializing the React framework and integrating essential services<br>- It sets up routing with BrowserRouter and configures authentication using Auth0Provider, ensuring secure user access<br>- The application's visual and functional components are encapsulated within the App component, which is rendered to the root DOM node.</td>
</tr>
</table>
<details>
<summary><b>contexts</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/contexts/PlayerContext.jsx'>PlayerContext.jsx</a></b></td>
<td>- PlayerContext.jsx establishes a centralized management system for music playback within the Swar.UI.React application<br>- It handles song loading, play/pause toggling, track navigation, and media session updates, enhancing user interaction by maintaining playback state, song details, and navigation history<br>- This context facilitates efficient data sharing across different components of the application.</td>
</tr>
</table>
</blockquote>
</details>
<details>
<summary><b>components</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/components/MobileNav.jsx'>MobileNav.jsx</a></b></td>
<td>- MobileNav serves as the navigation component for mobile users within the Swar.UI.React project<br>- It utilizes icons and links for essential sections like Home, Library, and Profile, enhancing user experience by providing easy access and visibility<br>- Integration with Auth0 for authentication allows display of user-specific data, such as profile pictures.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/components/Navbar.jsx'>Navbar.jsx</a></b></td>
<td>- Navbar.jsx serves as the user interface component responsible for rendering the navigation bar in a React application<br>- It integrates authentication checks to display user-specific elements like profile information and links to home and library pages, and includes a search functionality, enhancing user navigation and accessibility within the application.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/components/SongSkeleton.jsx'>SongSkeleton.jsx</a></b></td>
<td>- SongSkeleton.jsx provides a placeholder representation for song items within the user interface while data is loading<br>- It utilizes the react-loading-skeleton library to display animated skeletons for song images and details, enhancing the user experience by indicating content is on the way during data fetch operations<br>- This component supports dynamic rendering based on the number of cards specified.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/components/Layout.jsx'>Layout.jsx</a></b></td>
<td>- Layout.jsx serves as the structural backbone for the user interface in the Swar.UI.React project, dynamically integrating navigation and media playback components based on user authentication status, device type, and navigation state<br>- It ensures a responsive and user-centric experience by adjusting layout elements like padding and visibility of navigation bars according to the application's context and user interactions.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/components/InstallPWA.jsx'>InstallPWA.jsx</a></b></td>
<td>- InstallPWA.jsx facilitates the installation of the web application as a Progressive Web App (PWA) on supported devices<br>- It manages user prompts for installation and confirms successful app installation with notifications<br>- This component enhances user engagement by providing a seamless installation experience directly from the browser interface.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/components/PlayerSkeleton.jsx'>PlayerSkeleton.jsx</a></b></td>
<td>- PlayerSkeleton.jsx serves as a placeholder component within the Swar.UI.React project, providing visual feedback during data loading phases<br>- It utilizes the react-loading-skeleton library to display animated skeletons mimicking the layout of a media player, enhancing user experience by indicating content loading states, particularly for player controls and lyrics sections.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/components/SearchBar.jsx'>SearchBar.jsx</a></b></td>
<td>- MobileSearchBar, a component within the Swar.UI.React/src/components directory, facilitates user interaction by enabling search functionality specifically for mobile users<br>- It captures user input to query songs and artists, then navigates to the search results page using dynamic URL routing, enhancing the application's usability and navigation efficiency.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/components/Footer.jsx'>Footer.jsx</a></b></td>
<td>- Footer.jsx serves as the footer component for the Swar.UI.React project, providing a consistent bottom section across all pages<br>- It includes links to the creator's GitHub and Instagram profiles, enhancing user engagement and offering direct access to social channels<br>- The component emphasizes a personal touch with a message crafted by the developer.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/components/PlaylistCard.jsx'>PlaylistCard.jsx</a></b></td>
<td>- PlaylistCard.jsx serves as a component within the Swar.UI.React project, enabling interactive management of playlist cards<br>- It facilitates navigation to specific playlists, editing playlist details, toggling privacy settings, and deleting playlists<br>- The component uses hooks for state management and actions, and integrates modals for user interactions like editing.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/components/PlaylistsSkeleton.jsx'>PlaylistsSkeleton.jsx</a></b></td>
<td>- PlaylistsSkeleton.jsx provides a loading placeholder for playlist components within the Swar.UI.React project<br>- It utilizes the react-loading-skeleton library to display animated skeletons, enhancing user experience during data fetching by indicating that content is being loaded<br>- This component is crucial for maintaining a smooth and visually consistent interface in the application's playlist sections.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/components/ArtistButton.jsx'>ArtistButton.jsx</a></b></td>
<td>- ArtistButton.jsx defines a reusable React component that facilitates navigation within the application by rendering a styled button<br>- Each button, when clicked, directs the user to a search page filtered by the artist's name<br>- This component enhances user interaction by simplifying access to artist-specific searches, contributing to the overall usability and navigational efficiency of the UI layer in the Swar.UI.React project.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/components/MiniPlayer.jsx'>MiniPlayer.jsx</a></b></td>
<td>- MiniPlayer serves as a compact, interactive music player component within the Swar.UI.React project<br>- It integrates authentication and navigation handling, allowing users to control music playback and navigate to detailed song views<br>- The component only appears when users are authenticated and not on the main or player pages, enhancing user experience by context-sensitive display and functionality.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/components/Icons.jsx'>Icons.jsx</a></b></td>
<td>- Provides a collection of SVG icons including AddIcon, CopyIcon, EditIcon, and DeleteIcon for use across the Swar.UI.React application<br>- Each icon is designed with accessibility features such as aria-hidden and focusable attributes, ensuring they are presentationally appropriate while supporting various UI functionalities by accepting props for customization.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/components/ProfileSkeleton.jsx'>ProfileSkeleton.jsx</a></b></td>
<td>- ProfileSkeleton.jsx provides a placeholder user interface component within the Swar.UI.React project, specifically for user profiles during data loading phases<br>- It utilizes the react-loading-skeleton library to display animated skeletons, enhancing the user experience by indicating that profile information is currently being loaded.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/components/ArtistSkeleton.jsx'>ArtistSkeleton.jsx</a></b></td>
<td>- ArtistSkeleton.jsx provides a placeholder visualization for artist components within the Swar.UI.React project<br>- It generates a series of skeleton screens, which are used to maintain a smooth user experience by displaying temporary loading placeholders as the artist data loads<br>- This component enhances the visual consistency and perceived performance of the application.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/components/SongCard.jsx'>SongCard.jsx</a></b></td>
<td>- SongCard.jsx defines a reusable component for displaying song information within the Swar.UI.React project<br>- It visually presents songs as cards, featuring clickable images linked to a player view, along with song titles and primary artist details<br>- This component enhances user interaction by facilitating navigation to the music player with specific song data.</td>
</tr>
</table>
<details>
<summary><b>LikeButton</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/components/LikeButton/LikeButton.jsx'>LikeButton.jsx</a></b></td>
<td>- LikeButton, a React component, manages user interactions for liking or unliking songs within the Swar.UI.React application<br>- It utilizes custom hooks for API interactions and state management to reflect and update a song's like status, providing visual feedback through dynamic SVG icons and toast notifications for error handling.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/components/LikeButton/likebutton.css'>likebutton.css</a></b></td>
<td>- Defines the visual and interactive elements of a Like button within the Swar.UI.React project, specifically styling a heart-shaped button that animates upon interaction<br>- The CSS rules manage the button's appearance, transitions, and animations, enhancing user engagement by visually responding to clicks with scaling and color changes.</td>
</tr>
</table>
</blockquote>
</details>
<details>
<summary><b>Error</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/components/Error/NotResultError.jsx'>NotResultError.jsx</a></b></td>
<td>- NotResultError.jsx defines a React component that displays a user-friendly message and graphic when search results are absent<br>- Positioned within the UI component layer of the architecture, it enhances user experience by providing clear visual and textual feedback during unsuccessful search attempts, encouraging further interaction or return visits.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/components/Error/ErrorMessage.jsx'>ErrorMessage.jsx</a></b></td>
<td>- ErrorMessage.jsx serves as a component within the Swar.UI.React project, dynamically rendering error messages based on HTTP status codes<br>- It specifically handles 404 and 400 errors with custom components, and provides a default message for other errors<br>- This modular approach enhances the user interface by providing clear, context-specific feedback for various error states.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/components/Error/BadRequestError.jsx'>BadRequestError.jsx</a></b></td>
<td>- BadRequestError.jsx defines a React component that displays a user-friendly error message and graphic when a bad request occurs<br>- It enhances user experience by providing a clear notification and encouragement to retry the action, contributing to the overall robustness and usability of the application's user interface.</td>
</tr>
</table>
</blockquote>
</details>
<details>
<summary><b>modals</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/components/modals/PlaylistModal.jsx'>PlaylistModal.jsx</a></b></td>
<td>- PlaylistModal serves as a user interface component within the Swar.UI.React project, facilitating the creation and editing of playlists<br>- It manages user inputs for playlist names and descriptions, validates them, and handles their submission<br>- The modal supports both creation and edit modes, enhancing user interaction by providing a dynamic and responsive form experience.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/components/modals/PlaylistInfoModal.jsx'>PlaylistInfoModal.jsx</a></b></td>
<td>- PlaylistInfoModal serves as a user interface component within the Swar.UI.React project, enabling users to add songs to playlists<br>- It utilizes modal dialogs to present playlist options fetched through custom hooks, handles user interactions for selecting and adding songs to playlists, and provides feedback on the operation's success or failure.</td>
</tr>
</table>
</blockquote>
</details>
</blockquote>
</details>
<details>
<summary><b>hooks</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/hooks/usePlaylistSongs.js'>usePlaylistSongs.js</a></b></td>
<td>- UsePlaylistSongs is a custom React hook designed to manage and fetch playlist songs from a specified API endpoint<br>- It leverages caching for efficient data retrieval and updates the state with categorized song lists, such as trending and relaxing, enhancing user experience by reducing load times and maintaining data availability offline.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/hooks/usePlaylistInfo.js'>usePlaylistInfo.js</a></b></td>
<td>- UsePlaylistInfo is a custom React hook designed to manage the retrieval and state of playlist information within the Swar.UI.React application<br>- It leverages an API client to fetch playlist data based on user ID, handling loading states and errors, thereby streamlining the integration of playlist data across the user interface components.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/hooks/useApiClient.js'>useApiClient.js</a></b></td>
<td>- UseApiClient serves as a custom React hook within the Swar.UI.React project, facilitating secure API interactions by integrating authentication tokens into requests<br>- It dynamically configures an API client based on service type and manages token insertion using Auth0, ensuring all outgoing requests are authenticated.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/hooks/useSearchData.js'>useSearchData.js</a></b></td>
<td>- UseSearchData is a custom React hook designed to manage the fetching and state of search results within the Swar.UI.React application<br>- It handles user queries to retrieve song data, manages loading states, and captures errors, providing a streamlined way to access search results and artist information based on user input.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/hooks/usePlaylistActionsBase.js'>usePlaylistActionsBase.js</a></b></td>
<td>- Provides a set of React hooks for managing playlist interactions within the Swar.UI.React application<br>- It facilitates adding and removing songs from playlists, handling API communications, and user feedback through success or error messages<br>- The hooks leverage an API client for server requests and optimize re-rendering with useCallback.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/hooks/useRecentlyPlayedSongs.js'>useRecentlyPlayedSongs.js</a></b></td>
<td>- UseRecentlyPlayedSongs is a custom React hook that manages the retrieval and caching of a user's recently played songs from a music streaming service<br>- It leverages dual API clients to fetch song details and user play history, updating the UI state with song data and loading status, enhancing user experience by efficiently handling data fetching and state management within the application's architecture.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/hooks/usePlayer.js'>usePlayer.js</a></b></td>
<td>- Provides a custom hook, `usePlayer`, that facilitates access to the `PlayerContext` within the React component tree of the Swar.UI.React project<br>- It ensures that the hook is used in a component wrapped by a `PlayerProvider`, enforcing proper context usage and enhancing state management across the UI components related to player functionalities.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/hooks/useUserPlaylistSongs.js'>useUserPlaylistSongs.js</a></b></td>
<td>- Manages the retrieval and caching of songs within a user's playlist in the Swar.UI.React application<br>- It utilizes API calls to fetch playlist details and individual songs, caching them for efficiency<br>- The hook also handles loading states and errors, providing a responsive user experience for managing playlists.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/hooks/usePlaylistActions.js'>usePlaylistActions.js</a></b></td>
<td>- UsePlaylistActions is a custom React hook that facilitates interaction with playlist functionalities in a web application<br>- It enables operations such as deleting a playlist, toggling its privacy, copying its link, and editing its details<br>- Each action is integrated with API calls and user feedback mechanisms through toasts for success or error notifications.</td>
</tr>
</table>
</blockquote>
</details>
<details>
<summary><b>pages</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/pages/Player.jsx'>Player.jsx</a></b></td>
<td>- SongPlayer serves as the interactive media playback interface within the Swar.UI.React project, enabling users to play, pause, skip, and loop songs<br>- It integrates functionalities like downloading songs, displaying song details, and viewing lyrics<br>- The component enhances user interaction by providing real-time feedback on song progress and facilitating search capabilities through an embedded search bar.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/pages/Profile.jsx'>Profile.jsx</a></b></td>
<td>- Profile.jsx serves as the user profile management interface within the Swar.UI.React application, enabling users to view and interact with their personal information, playlists, and recent activity<br>- It integrates user authentication, data fetching for playlists and recently played songs, and displays this data dynamically with error handling and loading states.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/pages/Search.jsx'>Search.jsx</a></b></td>
<td>- Search.jsx serves as a dynamic search interface within the Swar.UI.React project, enabling users to query and view search results, related artists, and trending songs<br>- It utilizes custom hooks for fetching data and components for displaying songs and artists, providing a responsive and interactive user experience.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/pages/Library.jsx'>Library.jsx</a></b></td>
<td>- Library.jsx serves as the user interface for managing playlists within the application<br>- It enables users to view, create, and manage their playlists, handling operations like fetching playlists from the server, displaying loading states or errors, and integrating modals for playlist creation<br>- The page enhances user interaction through responsive feedback mechanisms like success and error toasts.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/pages/Playlist.jsx'>Playlist.jsx</a></b></td>
<td>- Playlist.jsx serves as the user interface for displaying and managing individual playlists within the Swar.UI.React application<br>- It utilizes hooks for fetching playlist details and songs, handling song removal, and navigating to the song player<br>- The page dynamically updates song lists and provides interactive elements for user actions, enhancing the playlist management experience.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/pages/Landing.jsx'>Landing.jsx</a></b></td>
<td>- Swar.UI.React/src/pages/Landing.jsx serves as the entry point for users into the Swar application, providing a visually engaging landing page<br>- It facilitates user authentication, showcases key features like high-quality streaming and playlist creation, and promotes app installation and usage through interactive elements and navigation prompts<br>- The page enhances user engagement with dynamic typewriter effects and a structured presentation of services.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/pages/Home.jsx'>Home.jsx</a></b></td>
<td>- Home.jsx serves as the main user interface for displaying various song categories in the Swar.UI.React project<br>- It utilizes custom hooks to fetch playlist and recently played songs, rendering them through the SongCard component<br>- The page also includes a SearchBar and Footer, enhancing user navigation and experience.</td>
</tr>
</table>
</blockquote>
</details>
<details>
<summary><b>routes</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/routes/ProtectedRoute.jsx'>ProtectedRoute.jsx</a></b></td>
<td>- ProtectedRoute.jsx serves as a security gate within the Swar.UI.React application, ensuring that only authenticated users can access certain routes<br>- It utilizes Auth0 for authentication, displays a loading indicator during user verification, and greets authenticated users<br>- Unauthenticated users are redirected to the home page, maintaining the integrity and privacy of protected routes.</td>
</tr>
</table>
</blockquote>
</details>
<details>
<summary><b>api</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/src/api/axios.js'>axios.js</a></b></td>
<td>- Establishes a configurable Axios client for interacting with two distinct backend services within the Swar.UI.React application<br>- It dynamically sets the base URL depending on whether the request targets the main SWAR API or the Song Service, ensuring appropriate API calls are made with correct headers for JSON content.</td>
</tr>
</table>
</blockquote>
</details>
</blockquote>
</details>
<details>
<summary><b>public</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI.React/public/robots.txt'>robots.txt</a></b></td>
<td>- Manages web crawler access for the Swar.UI.React project, specifically within the public directory<br>- By allowing all user-agents unrestricted access, the robots.txt file ensures that search engines can freely index the site's content, enhancing its visibility and searchability on the internet.</td>
</tr>
</table>
</blockquote>
</details>
</blockquote>
</details>
<details> <!-- Swar.UI Submodule -->
<summary><b>Swar.UI</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI/register.html'>register.html</a></b></td>
<td>- Swar.UI/register.html serves as the user registration interface for Swar, a music streaming platform<br>- It facilitates new user account creation by collecting essential details such as name, email, gender, and password<br>- The page is styled with Tailwind CSS and includes links to additional scripts for form handling and service interaction.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI/library.html'>library.html</a></b></td>
<td>- Swar.UI/library.html serves as the user interface for the "Your Library" section of the Swar music streaming platform<br>- It provides users with access to their saved playlists and liked songs, enabling them to manage and enjoy their favorite music<br>- The page includes navigation elements, search functionality, and interactive components for an enhanced user experience.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI/profile.html'>profile.html</a></b></td>
<td>- Swar.UI/profile.html serves as the user profile interface for the Swar music streaming platform<br>- It provides users with functionalities to view and edit their profile, change their password, and delete their account<br>- Additionally, it displays user-specific content such as playlists and recent activity, enhancing the personalized experience on the platform.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI/login.html'>login.html</a></b></td>
<td>- Swar.UI/login.html serves as the user interface for logging into the Swar music streaming platform<br>- It provides a form for email and password input, visual feedback for login processes, and links for users to register if they don't have an account<br>- The page enhances user experience with responsive design and aesthetic consistency.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI/playlist.html'>playlist.html</a></b></td>
<td>- Swar.UI/playlist.html serves as the user interface for the "Your Library" section of the Swar music streaming platform<br>- It provides a responsive layout for navigating personal music collections, featuring search functionality, navigation bars, and dynamic content areas for displaying playlists and songs<br>- The page enhances user interaction with aesthetic elements and mobile responsiveness.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI/songPlayer.html'>songPlayer.html</a></b></td>
<td>- The file `songPlayer.html` within the `Swar.UI` directory serves as a crucial component of the Swar music streaming platform, specifically tailored for playing songs<br>- This HTML document is structured to provide a user interface that allows users to interact with the platform's music streaming capabilities<br>- It includes meta tags for proper encoding, viewport configuration for responsive design, and detailed descriptions to enhance SEO<br>- Additionally, it incorporates various favicon links for device-specific icons, ensuring a cohesive visual representation across different devices and platforms.

In the broader context of the Swar project's architecture, `songPlayer.html` likely acts as a standalone page or a part of a larger web application responsible for the music playback experience<br>- This file's role is to deliver a seamless and accessible user interface, contributing directly to user engagement and satisfaction by enabling easy navigation and interaction with the platform's core features—music streaming.</td>

</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI/index.html'>index.html</a></b></td>
<td>- The file `Swar.UI/index.html` serves as the primary entry point for the Swar music streaming platform's user interface<br>- This HTML document is crucial for initializing the user experience, setting up the initial layout, and integrating essential metadata and resources<br>- It includes meta tags that define character encoding, viewport settings for responsive design, and a description that enhances SEO for the platform<br>- Additionally, it links to various favicon sizes and Apple touch icons, which are important for branding and user recognition across different devices and platforms<br>- The document also references a manifest file, which is key for defining the web application's behavior when added to a user's home screen, particularly in mobile environments.

In the broader context of the project's architecture, this file acts as the foundational layer that supports the visual and interactive aspects of the platform, ensuring that users have a seamless and engaging experience right from the start<br>- It is likely interconnected with CSS for styling and JavaScript files for functionality, which would be specified in other parts of the project structure<br>- This setup is essential for maintaining a scalable and maintainable codebase in a potentially complex web application like a music streaming service.</td>

</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI/search.html'>search.html</a></b></td>
<td>- Swar.UI/search.html serves as the user interface for the search functionality within the Swar music streaming platform<br>- It provides a responsive layout for searching songs and artists, featuring a navigation bar, search input fields, and sections for displaying search results, trending content, and artist suggestions<br>- The page enhances user interaction with dynamic content loading and mobile responsiveness.</td>
</tr>
</table>
<details>
<summary><b>public</b></summary>
<blockquote>
<table>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI/public/manifest.json'>manifest.json</a></b></td>
<td>- Swar.UI's manifest.json configures the web application's appearance on user devices, defining essential metadata such as app names, icons, and theme colors<br>- It ensures the app is recognized and functions seamlessly across platforms, enhancing user engagement by setting visual elements and behavior in standalone display mode.</td>
</tr>
<tr>
<td><b><a href='https://github.com/neeraj779/Swar/blob/master/Swar.UI/public/robots.txt'>robots.txt</a></b></td>
<td>- Manages web crawler access for the Swar.UI public directory, specifically instructing search engines that all agents are permitted to index all content<br>- This setup enhances the visibility and searchability of the site, contributing to broader accessibility and user engagement across the internet.</td>
</tr>
</table>
</blockquote>
</details>
</blockquote>
</details>

</details>

---

## 🚀 Getting Started

### ☑️ Prerequisites

Before getting started with Swar, ensure your runtime environment meets the following requirements:

- **Programming Language:** CSharp
- **Package Manager:** Nuget, Npm
- **Container Runtime:** Docker

### ⚙️ Installation

Install Swar using one of the following methods:

**Build from source:**

1. Clone the Swar repository:

```sh
❯ git clone https://github.com/neeraj779/Swar
```

2. Navigate to the project directory:

```sh
❯ cd Swar/<project-directory>
```

3. Install the project dependencies:

**Using `nuget`** &nbsp; [<img align="center" src="https://img.shields.io/badge/C%23-239120.svg?style={badge_style}&logo=c-sharp&logoColor=white" />](https://docs.microsoft.com/en-us/dotnet/csharp/)

```sh
❯ dotnet restore
```

**Using `docker`** &nbsp; [<img align="center" src="https://img.shields.io/badge/Docker-2CA5E0.svg?style={badge_style}&logo=docker&logoColor=white" />](https://www.docker.com/)

```sh
❯ docker build -t Swar .
```

### 🤖 Usage

Run Swar using the following command:
**Using `nuget`** &nbsp; [<img align="center" src="https://img.shields.io/badge/C%23-239120.svg?style={badge_style}&logo=c-sharp&logoColor=white" />](https://docs.microsoft.com/en-us/dotnet/csharp/)

```sh
❯ dotnet run
```

**Using `docker`** &nbsp; [<img align="center" src="https://img.shields.io/badge/Docker-2CA5E0.svg?style={badge_style}&logo=docker&logoColor=white" />](https://www.docker.com/)

```sh
❯ docker run -it {image_name}
```

### 🧪 Testing

Run the test suite using the following command:
**Using `nuget`** &nbsp; [<img align="center" src="https://img.shields.io/badge/C%23-239120.svg?style={badge_style}&logo=c-sharp&logoColor=white" />](https://docs.microsoft.com/en-us/dotnet/csharp/)

```sh
❯ dotnet test
```

---

## 🎗 License

Distributed under the MIT License. See `LICENSE` for more information.
