module.exports = {
  webpack: {
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
}
