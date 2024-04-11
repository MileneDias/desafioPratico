export default {
    border: {
        radius12: '12px',
        radius: '20px',
        solid: '1px solid #B2B2B2',
        solidWhite: '1px solid #fff',
        solidWhite30: '1px solid rgba(255, 255, 255, 0.3)'
    },
    font: {
        family: 'Inter, sans-serif',
        normal: 400,
        medium: 500,
        semi: 600,
        bold: 700,
        extra: 800,
        sizes: {
            xsmall: '1.2rem',
            small: '1.4rem',
            medium: '1.5rem',
            xmedium: '1.6rem',
            large: '1.8rem',
            xlarge: '2.0rem',
            xxlarge: '2.8rem',
            big: '3.4rem',
            huge: '5.2rem'
        }
    },
    colors: {
        primaryBlue: '#005DA9',
        secondaryBlue: '#0075FF',
        white: '#fff',
        black: '#000',
        primaryDark: '#1C202C',
        gray: '#353535',
        blue: '#030458',
        rose: '#A74CDE',
        red: '#C81818',
        lightGray: '#B2B2B2',
        green: '#56B82C',
        white10: 'rgba(255, 255, 255, 0.1)',
        white30: 'rgba(255, 255, 255, 0.3)',
        black30: 'rgba(0, 0, 0, 0.3)',
        black50: 'rgba(0, 0, 0, 0.5)',
        yellow: '#f3c015',
        lightBlue: '#29a7da',
        background: '#5db0f6',
        gradients: {
            menu: 'linear-gradient(123.64deg, rgba(255, 255, 255, 0) -22.38%, rgba(255, 255, 255, 0.117) 70.38%)',
            menuLine:
                'linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #e0e1e2 49.52%, rgba(224, 225, 226, 0.15625) 99.04%)',
            base: 'linear-gradient(123.64deg, rgba(255, 255, 255, 0) -22.38%, rgba(255, 255, 255, 0.039) 70.38%)',
            home: 'linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)',
            accessDevice:
                'linear-gradient(126.97deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%)',
            modal:
                'linear-gradient(126.97deg, rgba(6, 11, 40, 1) 28.26%, rgba(10, 14, 35, 1) 91.2%)'
        },
        chart: {
            gray: '#666666',
            purple: 'rgba(72, 16, 232, 0.8)',
            blue: 'rgba(33, 215, 255, 0.8)',
            blueLight: 'rgba(33, 215, 255, 1)',
            rose: '#A74CDE',
            green: '#56B82C',
            darkGreen: '#006400',
            red: '#C81818',
            yellow: '#FFFF00'
        }
    },
    spacings: {
        xxsmall: '0.8rem',
        xmsmall: '1.2rem',
        xsmall: '1.6rem',
        small: '2.4rem',
        medium: '3.2rem',
        large: '4.0rem',
        xlarge: '4.8rem',
        xxlarge: '5.6rem'
    },
    transition: {
        medium: 'all 0.4s ease',
        slow: 'all 1s ease'
    },
    breakpoints: {
        mobileS: '20rem',
        mobileM: '23.438rem',
        mobileL: '26.563rem',
        tablet: '48rem',
        laptop: '64rem',
        laptopL: '90rem',
        desktop: '160rem'
    }
} as const
