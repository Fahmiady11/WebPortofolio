import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import useThemeStore from '../../store/ThemeStore';
export default function ThemeMode() {
  const changeMode = useThemeStore((state) => state.changeMode);
  const mode = useThemeStore((state) => state.mode);

  return (
    <>
      <div
        onClick={() => changeMode()}
        className={`${
          mode === 'light' ? 'bg-blue-500/30 hover:bg-blue-500/40' : 'bg-white/5 hover:bg-white/10'
        } p-2 backdrop-blur-sm rounded-md cursor-pointer shadow-md `}
      >
        {mode === 'light' ? (
          <MoonIcon className="h-5 w-5 text-blue-600" />
        ) : (
          <SunIcon className="h-5 w-5 text-yellow-600" />
        )}
      </div>
    </>
  );
}
