# CRYPTOX - Get the Latest Crypto News!
- Website Link: https://thedailycrypto.netlify.app/
- This project displays news, price, and general information about the Top 100 Cryptocurrencies.
![image](https://user-images.githubusercontent.com/94336773/168397708-691fedab-1945-42d4-bd91-efd1facb8788.png)


## Project Description
### #1 - Filter cryptocurrency news based on niche crypto topics
#### HOW: Click the News tab to filter the latest news by your favourite coin, or a niche cryptocurrency topic.
![image](https://user-images.githubusercontent.com/94336773/168397907-c54320cd-abf6-42b0-a30e-933f1687cf5e.png)

#### #2 Search from the top 100 coins 
##### HOW: Click the Cryptocurrency tab to view the top 100 coins, or search for your favourite coin. 

![image](https://user-images.githubusercontent.com/94336773/168398160-b6cda67a-9a8d-44b2-902f-ebd0504e4eed.png)



### #3 - Get cryptocurrency general information and price data from the last 24 hours
#### HOW: Click any cryptocurrency card.
![image](https://user-images.githubusercontent.com/94336773/168397776-2dd69d45-81e1-4cb4-af3a-405a6d1a8152.png)



### Technologies Used
1. Front end was developed on ReactJS https://reactjs.org/
2. Date store with Redux Toolkit https://redux-toolkit.js.org/
3. UI Design with Ant Design https://ant.design/
4. ChartJS https://www.chartjs.org/
5. CoinRanking API https://rapidapi.com/Coinranking/api/coinranking1?utm_source=google&utm_medium=cpc&utm_campaign=DSA&gclid=Cj0KCQjwg_iTBhDrARIsAD3Ib5ivjMGk-_CXCf0fGbLng21mkyppq4LmFaI60015TsajPPuKdrHWKU0aAoWHEALw_wcB
6. Bing News Search API https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1

## What I Learned
- This was my first time using the Redux Toolkit. It was quite challenging to understand, but I often referred to this diagram: 
![image](https://user-images.githubusercontent.com/94336773/168397978-ad460756-4712-40df-8cdf-408956e5c940.png)
- There is quite a bit of upfront work and added technical complexity to get your data stores  set up, but it makes the workflow much easier for making many requests.

## Next Features To Be Added
- Add the Coinbase API so users can buy/sell cryptocurrency
- Add a blog feature such that users can create "Reddit styled" posts about their favourite cryptocurrencies
- Add an NFT tab that shows a random NFT from OpenSeas

### Resources

This website was built with the help of a video tutorial.
The Coin Ranking API has deprecated since the video was launched, so I had to rework a lot of that myself, since the endpoints had changed.

https://www.youtube.com/watch?v=9DDX3US3kss

### Updates

1. The Exchanges feature is no longer free since CoinRanking API is now on V2


# INSTALLATION (this project was deployed with Netlify!)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
