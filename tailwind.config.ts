import type { Config } from "tailwindcss";
import tailwindcssAnimate from 'tailwindcss-animate'

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
  			primary: {
  				'100': '#BED2FF',
  				'200': '#86ABFF',
  				'300': '#4E84FF',
  				'400': '#165DFF',
  				'600': '#0037B4',
  				'700': '#002A8B',
  				'800': '#001E63',
  				'900': '#00123A',
  				DEFAULT: '#0043DD'
  			},
  			neutral: {
  				'100': '#F5F5F5',
  				'200': '#EEEEEE',
  				'300': '#E0E0E0',
  				'400': '#9E9E9E',
  				'600': '#757575',
  				'700': '#616161',
  				'800': '#424242',
  				'900': '#212121',
  				DEFAULT: '#BDBDBD'
  			},
  			danger: {
  				'100': '#FFEBEE',
  				'700': '#D32F2F',
  				DEFAULT: '#D50000'
  			},
  			success: {
  				'100': '#E8F5E9',
  				'600': '#4CAF50',
  				DEFAULT: '#009900'
  			},
  			warning: {
  				'100': '#FFF3E0',
  				'600': '#FF9100',
  				DEFAULT: '#FF6D00'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		spacing: {
  			space5: '5px',
  			space8: '8px',
  			space12: '12px',
  			space16: '16px',
  			space20: '20px',
  			space24: '24px',
  			space28: '28px',
  			space30: '30px',
  			space32: '32px',
  			space34: '34px',
  			space40: '40px'
  		},
  		fontSize: {
  			normal: '16px'
  		},
  		fontWeight: {
  			normal: '400',
  			semibold: '600',
  			bold: '700',
  			extrabold: '800'
  		},
  		boxShadow: {
  			'100': '0px 4px 4px -2px rgba(24, 39, 75, 0.08), 0px 2px 4px -2px rgba(24, 39, 75, 0.12)',
  			'200': '0px 8px 8px -4px rgba(24, 39, 75, 0.08), 0px 4px 6px -4px rgba(24, 39, 75, 0.12)',
  			'300': '0px 8px 16px -6px rgba(24, 39, 75, 0.08), 0px 6px 8px -6px rgba(24, 39, 75, 0.12)',
  			'400': '0px 8px 24px -4px rgba(24, 39, 75, 0.08), 0px 6px 12px -6px rgba(24, 39, 75, 0.12)',
  			'500': '0px 10px 32px -4px rgba(24, 39, 75, 0.10), 0px 6px 14px -6px rgba(24, 39, 75, 0.12)',
  			'700': '0px 14px 64px -4px rgba(24, 39, 75, 0.12), 0px 8px 22px -6px rgba(24, 39, 75, 0.12)',
  			'800': '0px 18px 88px -4px rgba(24, 39, 75, 0.14), 0px 8px 28px -6px rgba(24, 39, 75, 0.12)',
  			DEFAULT: '0px 1.5px 2px 0.3px #00000059'
  		},
  		letterSpacing: {
  			'2': '-0.2px',
  			'5': '-0.5px',
  			'12': '-0.12px',
  			'14': '-0.14px',
  			'22': '-0.22px',
  			'24': '-0.24px'
  		}
  	},
  	plugins: [
  		'tailwindcssAnimate'
  	]
  }
} satisfies Config;
