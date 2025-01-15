# README

Acest proiect este o platformă interactivă destinată divertismentului și explorării funcționalităților web moderne. Site-ul oferă utilizatorilor o experiență plăcută și captivantă, combinând elemente vizuale atractive cu funcționalități dinamice pentru a transforma timpul petrecut online într-o activitate recreativă și interesantă.

## Funcționalitățile Site-ului
- Interfață prietenoasă și ușor de utilizat
- Gestionarea eficientă a datelor prin intermediul backend-ului Node.js și Express
- Recomandări personalizate de seriale în funcție de genul preferat al utilizatorului
- Preluarea de date dintr-un API extern pentru afișarea informațiilor despre seriale
- Forum pentru utilizatori, unde aceștia pot recomanda seriale pentru a fi adăugate pe pagina principală
  - Validarea datelor introduse în forum pentru a asigura calitatea conținutului
- Funcționalități dinamice pentru o experiență interactivă

## Instrucțiuni de Instalare și Rulare

### Cerințe preliminare
- Node.js instalat pe sistemul local
- NPM (Node Package Manager)
- Un editor de text sau IDE (de exemplu, Visual Studio Code)

### Configurare Backend
1. Deschideți terminalul și navigați la directorul `backend` al proiectului:
   ```bash
   cd backend
   ```
2. Inițializați proiectul Node.js:
   ```bash
   npm init -y
   ```
3. Instalați modulele necesare pentru backend:
   ```bash
   npm install cors
   ```
4. Porniți serverul:
   ```bash
   node server.js
   ```

### Configurare Frontend
1. Deschideți terminalul și navigați la directorul frontend-ului proiectului (dacă există un director separat pentru frontend).
2. Instalați toate dependențele necesare pentru proiectul React:
   ```bash
   npm install
   ```
3. Instalați biblioteca `react-router-dom`:
   ```bash
   npm install react-router-dom
   ```
4. Rulați aplicația React:
   ```bash
   npm run dev
   ```
5. După pornire, în consola terminalului va apărea un link similar cu următorul:
   ```
   http://localhost:5173/
   ```
   Accesați acest link într-un browser web pentru a vizualiza aplicația.

## Bibliografie
- [Documentația oficială Node.js](https://nodejs.org/)
- [Documentația oficială Express](https://expressjs.com/)
- [Documentația oficială React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/en/main)

