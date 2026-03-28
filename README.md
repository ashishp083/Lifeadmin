# LifeAdmin - Government Services Assistant

A React application designed to help Indian citizens manage government-related tasks like ITR filing, passport renewal, and accessing government schemes with bilingual support (English/Hindi).

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/react-%5E17.0.2-blue)
![Platform](https://img.shields.io/badge/platform-web-orange)

## Features

- **Bilingual Interface**: Seamless switching between English and Hindi
- **Task Management**: Step-by-step guidance for complex government procedures
- **Document Storage**: Secure local storage for important documents
- **DigiLocker Integration**: Connect to government's digital locker system
- **AI Assistant**: Claude-powered help for government services
- **Mobile-First Design**: Optimized for smartphones and tablets
- **Accessibility**: Screen reader support and keyboard navigation

## Screenshots

| Home Dashboard | Documents | AI Assistant |
|----------------|-----------|--------------|
| ![Home](screenshots/home.png) | ![Docs](screenshots/docs.png) | ![AI](screenshots/ai.png) |

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/lifeadmin.git
cd lifeadmin
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory:
```env
REACT_APP_DIGILOCKER_CLIENT_ID=your_digilocker_client_id
REACT_APP_DIGILOCKER_REDIRECT_URI=http://localhost:3000/callback
```

4. Start the development server:
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view the app

### Building for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/         # React components
│   ├── Home.jsx        # Dashboard view
│   ├── Documents.jsx   # Document management
│   ├── AIScreen.jsx    # AI assistant interface
│   ├── Profile.jsx     # User profile
│   ├── TaskDetail.jsx  # Task step-by-step view
│   └── DigiLockerAuth.jsx # DigiLocker authentication
├── context/            # React context providers
│   └── LangContext.js  # Language context
├── services/           # External service integrations
│   └── digilocker.js   # DigiLocker API service
├── utils/              # Utility functions
│   ├── translations.js  # All app translations
│   └── constants.js    # Color and configuration constants
├── App.jsx             # Main application component
├── App.css             # Global styles
└── index.js            # Entry point
```

## Technologies Used

- **React** - Frontend framework
- **CSS3** - Styling with custom properties
- **Anthropic Claude** - AI assistance
- **DigiLocker API** - Government document integration
- **Google Fonts** - Poppins and Noto Sans typography

## Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your code follows our style guidelines and includes appropriate tests.

## Roadmap

- [ ] Offline mode for rural areas
- [ ] Push notifications for deadlines
- [ ] Multi-user family profiles
- [ ] Additional government scheme support
- [ ] Biometric authentication
- [ ] Dark mode theme

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the Digital India initiative for inspiration
- Icons by [EmojiOne](https://emojione.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Special thanks to all contributors

## Contact

Project Link: [https://github.com/yourusername/lifeadmin](https://github.com/ashishp083/lifeadmin)

---

*LifeAdmin is not affiliated with any government agency. This is a conceptual application designed to demonstrate how government services could be simplified for citizens.*
