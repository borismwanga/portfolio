import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		fontFamily: {
			appelGarmond: 'var(--font-appel-garmond)',
			appelGarmondBold: 'var(--font-appel-garmond-bold)',
			appelGarmondItalic: 'var(--font-appel-garmond-italic)',
			appelGarmondBoldItalic: 'var(--font-appel-garmond-bold-italic)',
			appelGarmondLight: 'var(--font-appel-garmond-light)',
			appelGarmondLightItalic: 'var(--font-appel-garmond-light-italic)'
		},
		animation: {
			"circling": "circling calc(var(--circling-duration)*1s) linear infinite",
		  },
		  keyframes: {
			"circling": {
			  "0%": {
				transform: "rotate(calc(var(--circling-offset) * 1deg)) translate(calc(var(--circling-radius) * 1px), 0) rotate(calc(var(--circling-offset) * -1deg))",
			  },
			  "100%": {
				transform: "rotate(calc(360deg + (var(--circling-offset) * 1deg))) translate(calc(var(--circling-radius) * 1px), 0) rotate(calc(-360deg + (var(--circling-offset) * -1deg)))",
			  },
			},
		  }
	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
