import Header from '../organisms/Header';

export default function Layout({ children }) {
  return (
    <div className="w-4/5 m-auto h-screen">
      <Header />
      {children}
    </div>
  );
}
