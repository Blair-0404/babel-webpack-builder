const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development", // 개발모드(이름)
  entry: "./src/app.js", // 시작점 (예를들어 회원가입 페이지)
  output: {
    path: path.resolve(__dirname, "dist"), // dist라는 디렉토리에
    filename: "bundle.js", // 이 이름으로 파일만들어달라는 의미
                          // 즉 app.js를 돌려서 번들링된 결과가 bundle.js에 담기는 것 이다.
  },
  module: {
    rules: [ // 룰 설정
      {
        test: /\.js$/, // 정규표현식(.js로 끝나는 파일인경우 (바벨)로더 실행해라는 의미)
        use: 'babel-loader', // webpack에서 loader로 babel를 사용하기 위한 모듈을 설치해야 한다.
        exclude: /node_modules/ // (여기는 무시해라)
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin(
    {
      template: 'src/app.html'
    }
  )]
};

// 위처럼 설정 하고 npx webpack을 실행해주면 webpack.config.js라는 파일을 찾아서 번들링 실행한다.