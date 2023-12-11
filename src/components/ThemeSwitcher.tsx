// app/components/ThemeSwitcher.tsx
'use client';

import { Switch } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MoonIcon } from './MoonIcon';
import { SunIcon } from './SunIcon';

export function ThemeSwitcher() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const isDark = theme === 'dark';

	const toggleDarkTheme = () => {
		isDark ? setTheme('light') : setTheme('dark');
	};
	return (
		<div>
			<Switch
				onChange={toggleDarkTheme}
				defaultSelected
				size='lg'
				color='warning'
				startContent={<SunIcon />}
				endContent={<MoonIcon />}></Switch>
		</div>
	);
}
