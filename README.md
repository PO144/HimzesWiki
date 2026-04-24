<h1 align="center">Hímzés Wiki / Patch Library</h1>

![Állapot](https://img.shields.io/badge/%C3%81llapot-Akt%C3%ADv-brightgreen?style=for-the-badge) ![label](https://img.shields.io/date/1776717900?style=for-the-badge&label=Akt%C3%ADv%20since&color=blue)

### Mi ez?

Ez egy egyszerű, főként magamnak (AI-al) összedobott weboldal, ahol összegyűjtök menő designú foltokat, illetve olyanokat amik érdekes technikákat használnak fel! <br> Emellett ide gyűjtöm a technikákat, amiket érdekesnek találok, legyenk azok csak random összegyűjtöttek, vagy adott foltok replikálási kísérletei általam. <br> Teszek ide még különleges tippeket/trükköket, például, hogy hogyan lehet custom alsó szálat befogni Sanyiba, vagy, hogy hogyan lehet tűt cserélni, esetleg, hogy mit kell a cérna feszességről tudni.<br><b>Amolyan személyes tudásbázis.</b>
<br><i>A jövőben az alapokat is (~képzés anyagát, gyakran használt Wilcom basics) ide írom majd.</i>

---

### Az AI generálás részletei

Felhasznált AI-ok:

- V0 by Vercel (fő eszköz)
- ChatGPT Thinking 5.4 by OpenAI (javítások a végén)

<details>
<summary><i>Felhasznált promptok</i></summary>

This is a website made by another ai. You'll only need to do some very basic expansion.
I'll first add the previous prompts the other ai recieved so you can get an idea, than I'll give you the relevant prompt at the end. Since you don't have file handling, like the other ai, when asked to create a new file just give me the FULL code of the new file, and I'll create it myself.
If you are just changing something in a file however, don't try to rewrite the file, just tell me exactly what should >I< change where (ie. change that code there to this, insert this there etc)




---OLD PROMPTS: (Don't try to implrement these, they are already done to satisfactory levels, I'm only adding them here for context!)---



I have a previous project from you. All of these files should be in the public folder.
Patch-1 to patch-6 + bullshit.jpeg should be in the public/images/ folder.

It's a website made to gather patch embroidery techniques and interesting patches. It has a clean, simple but modern aesthetic, and it's gonna be used internally, so no need to sell anything to anyone.
You should continue development on the files I uploaded.

-----Here is the prompt, for continuation:

Great work, from now on, you should only ever develop into the public folder, the point is that any point I should be able to download that folder, upload it to a hosting service and have the website run flawlessly. Always keep to this!

Also great work on the way you develop the website!! The fact that I only need to edit a very well standardised js file to add content to it is honestly brilliant. I WANT YOU TO KEEP TO THIS METHOD!

Here is what is good:
0. The site should ALWAYS remain static. Always!

1. EVERYTHING needed should be contained within the public folder. Every page's code should be restricted to one html, one css and one js file. (Sub pages within the page may have their own 3 code files and own images folder located in the subpages own folder, which is located in the public folder, but only when specifically needed) 
2. The main javascript file being used to define the actual content is brilliant, and every changeable aspect of the page should be defined from here (from the one, organised and cleanly commented (but not overdone) js file) 
3. I'm very happy with the current aesthetic of the page, you should keep to this design style and color palette. 
4. I'm fine with everything being on one page, and the top right buttons just scrolling within. 
Here is what needs to be improved/changed: (numbers mark main points of change, -> marks paragraphs that expands upon the main point of change)

1. The patch categories should be editable from the js file. 
->There should be a list at the very beggining of the file where I can add new categories. The little category filter at the top of the page should adapt to whatever categories are currently in that list.
->If there is no way to make n number of filter buttons appear adaptively, then you are allowed to turn that selector into a scroll down menu, but try to keep to the current design.
2. The counters at the top should show the correct number of not only the patches and techniques, but the categories too. 
3. There should be a comment at the very beggining of the js file explaining the mechanics, also the fixed options, such as difficulty (ie. what difficulties are available to set). 
4. The techniques feature needs to be more advanced. The tecniques feature is gonna be used to describe how to execute fairly complex processes, so that needs to be changed as such: 
->Their little blocks if you will (the thing that highlights) should be clickable. Whenever clicked, a popup (not a browser popup, but like a js page or whatever) should open, about 90% the width of the page, big x on the right, basically like a window within the page.
->Every technique should have a small image next to it that shows off the actual technique irl, I'll call this the demonstrator image.
->This description window should show the technique name and the demonstrator image in large at the top. Below should be a numbered step by step style description. Every step has an auto generated number and step name in bold, a step description that can either be left blank or set, and up to two images show under the step. The images should be clickable, if click they should open up in their true size in a viewer, within the tab.
->These parameters (ie: technique name, demo image, unlimited amount of steps with step name, image, description should ALL be set from the script.js file.
5. The logo next to the "patch library" text should be an image, the size should be about whatever the svg is now. (you should only set the height ofc so the width can auto set) 
->Don't worry about the actual image, just link it to whatever you'd like, I'll set that on my end on my pc eventually.
6. Here is what js settable parameters the patches need: title, description, image, category, difficulty, techniques, link. If the link parameter is set, there should be a small-ish button which when clicked opens the link in a new page. You can keep the id parameter if needed, otherwise, get rid of it. 
->The techniques of a patch need to be clickable, when clicked, they should open the above mentioned and defined popup of the technique.
->The patch image should be clickable, and when clicked should appear in its original size in an image viewer tab, withing the page.

=======

Great work so far. Just one little change for now:

The search bar on the top should search in both patches and techniques. I like how the search works now in patches where it filters it down and only shows the matching ones, it should basically do the same for techniques at the bottom

=======

Great once again. However we are in need of some changes:

1. The difficulty rating should be moved from the patches to the techniques. All I need is for the difficulty parameter to be removed from the patches and be added to the techniques (in the js file of course). 
->It should still appear in the top right corner, with the same graphical formatting, just on the techniques.
->It should obviously also appear in the technique's popup tab, to the right of the technique title.
2. I'd like a view mode selector for the patches. One of the modes should be the current one, the other mode I'll describe here: 
->This mode should prioritise showing the images properly. It's allowed to downsize the images, altough not too much (they should generally be slightly larger then they would be in the currently existing mode), they should each clearly be visible without having to click on the image, that should only be necessary if the user wants to inspect something. They should be able to get a pretty good look at it without clicking. The image must not be cropped, it's aspect ratio changed or in any other way deformed in this mode.
->The number one goal here is to display the images, not to keep to a perfect grid, it only needs to be reasonably organised. The text is secondary, can be made slightly smaller.
->The selector should be a little two state "switch", with little svgs indicating the two modes, and should be place to the right of the category filter (so it stays in place, no matter how many categories)
3. A third layout should be added, the selector made three state. This should simply feature a row style layout, where the images are on the left at a constant, size, and the text is positioned to the right of it. They should be laid out below eachother, one row should contain one image and it's description, etc.


---PROMPT TO IMPLEMENT:---

Couple small changes:

1. You should split the js file in two. Make script.js contain the "functional part", the functions etc, and create a config.js where you should move over all the user config parts (patches, techniques, categories), and the relevant comments. You should do this change first. 
2. The default view mode should be the one that prioritises the images over the text. 
3. In the view mode that prioritises the images over the text, you are allowed to break the rows vertically, you shouldn't stretch the cells a ton just so you can start the next row at the same height. 
4. The view mode/layout selector should be the same height as the category selector. 
5. The link button in the one/row layout should be fixed width, not reach from side to side, that looks bad. 
6. In the view mode that prioritises the images over the text, you should make the images appear around 25% larger than they are right now, and the text smaller, make it more like an image gallery and less like a spreadsheet. If that means less columns, so be it.

-----------------------------------

You didn't make the image prioritise view mode the starting/default mode. That should be in use on first opening the website.

Also, in the one/row mode, you should make shure the images are centered vertically in their little place, not snapped to the top of it.

----------------------------

You didn't make the image prioritise view mode the starting/default mode. That should be in use on first opening the website.

Also, in the one/row mode, you should make shure the images are centered vertically in their little place, not snapped to the top of it.

----------------------------

In the one/row mode, please make the images and rows taller

----------------------------

Couple more things I'd like to fix:
1. The top right buttons, which just scroll on the page don't take into account the nav bar that they themselves are on, so they will scroll for example the top of the design collection to the top of the page but the very top will be covered by the nav bar. You should compensate for this with a little up scroll.
2. You should add an extra section like Design Collection or Technique Reference at the bottom of the page, called "Notes/Tips".
->You should also add this to the nav bar to the right of Techniques.
->Functionality-vise this bottom section should work the same way as the techniques, with the only difference being the lack of difficulty rating for its items.
->These items should be defined the same way in config.js, at the very bottom. They should be called notes whenever mentioned.

----------------------------

Can you change the categories counter on the top to count the number of notes?

</details>

---

#### To do/to add:

- [ ] Tű csere + minden amit a tűkről tudni kell
- [ ] Cérna feszítő rugó szerelés
- [ ] BSA foltok beimportálása
- [ ] Kétoldalú-nak kép
- [ ] Parafa-fal foltok beimportálása
- [ ] Puffy szivacs tut
- [ ] Carving stamp tut
- [ ] Színátmenet tut
- [ ] General tervezés tippek
- [ ] Jegyzet-tömb kavalkád beimportálása
- [ ] Weblap title
- [ ] Weblap favicon
- [ ] Limit image display in mode 2 to image size if its smaller than what it'd display at
- [ ] Video player?
- [ ] Multi image handling for demo images
- [ ] Custom alsószál
- [ ] Tépőzár hátú folt
- [ ] Színátmenet

---

<sub>Built with [README Builder](https://ofershap.github.io/readme-builder/)</sub>
