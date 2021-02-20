module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          // If you are using less-loader@5 please spread the lessOptions to options directly
          modifyVars: {
            'blue-6': '#6182F9',
            'orange-6': '#FF855F',
            'yellow-6': '#FAAD14',
            'red-6': '#F5222D',
            'green-6': '#3EB489',
            'primary-color': '@orange-6',
            'info-color': '@orange-6',
            'processing-color': '@orange-6',
            'error-color': '@red-5',
            'warning-color': '@yellow-5',
            'border-radius-base': '8px',
          },
          javascriptEnabled: true,
        },
      },
    },
  },
};
