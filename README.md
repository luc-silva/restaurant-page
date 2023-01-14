### Restaurant Page Project
# restaurant_page
Restaurant page made by me as a project for The Odin Project curriculum.

## Assignment
- Start the project the same way you began the webpack tutorial project.
run npm init in your project directory to generate a package.json file.
## Images
![drlowcarbs](https://user-images.githubusercontent.com/100732316/209740907-cce7ae9e-6dea-46f9-8b3e-73e4e4931722.png)
![drlowcarbs2](https://user-images.githubusercontent.com/100732316/209740914-8ec9d35e-e85c-4f9d-93ac-c025321d7965.png)
![drlowcarbs1](https://user-images.githubusercontent.com/100732316/209740927-879a58de-4dfc-46eb-8e68-0037679016ad.png)

- Create a src and dist directory with the following contents:
## Plans for the future:
- Refactor the whole project 

  - an index.js file in src

  - an index.html file in dist. Go ahead and link the main.js file in a script tag. main.js is the file that will be generated by webpack.

- Set up an HTML skeleton inside of dist/index.html with single div id="content".

- Inside of src/index.js write a simple console.log or alert statement and then run npx webpack. Load up dist/index.html in a browser to make sure everything is working correctly.
- Create a bare-bones homepage for a restaurant. Include an image, headline, and some copy about how wonderful the restaurant is. It’s okay to hard-code these into the HTML for now just to see how they look on the page.

- Now remove those elements from the HTML (so leave only the ```<html>```, ```<body>```, and ```<div id="content">``` tags) and instead create them by using JavaScript only, e.g. by appending each new element to div#content once the page is first loaded. Since we’re all set up to write our code in multiple files, let’s write this initial page-load function inside of its own module and then import and call it inside of index.js.

- Next, set up your restaurant site to use tabbed browsing to access the Contact and Menu pages. Look at the behavior of this student solution for visual inspiration.

- Put the contents of each ‘tab’ inside of its own module. Each module will export a function that creates a div element, adds the appropriate content and styles to that element and then appends it to the DOM.

- Write the tab-switching logic inside of index.js. You should have event listeners for each tab that wipes out the current contents and then runs the correct ‘tab module’ to populate it again.

- If you are using GitHub pages to host your completed page you need to do a tiny bit more work to get it to show up. After running webpack the full bundled version of your site is available in the dist folder, but GH pages is looking for an index.html in the root directory of your project.

## Credits
images: 
- [@pwign](https://unsplash.com/@pwign), [@dani_r](https://unsplash.com/@dani_r_photos), [@chumil](https://unsplash.com/@chumil09), [@f_abrarrr](https://unsplash.com/@f_abrarrr), [@noe_kf](https://unsplash.com/@noe_kf) [@evysem](https://unsplash.com/@evysem, [@sosoalso](https://unsplash.com/@sosoalso)' [@seitamaaphotography](https://unsplash.com/@seitamaaphotography), [@kadlibali02]