import localFont from 'next/font/local';

export const font = localFont({
  src: [
    {
      path: './NotoSansThai/NotoSansThai-Light.woff2',
      style: 'normal',
    },
    {
      path: './NotoSansThai/NotoSansThai-SemiBold.woff2',
      weight: '700',
      style: 'bold',
    },
    {
      path: './Poppins/Poppins-Light.woff2',
      style: 'normal',
    },
    {
      path: './Poppins/Poppins-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
  ],
});
