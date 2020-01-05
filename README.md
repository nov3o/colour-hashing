# colour-hashing
Just wanted to create simple function that hashes name and makes coloured circle with leading letter like Google accounts have

### It looks like this:
![image](https://user-images.githubusercontent.com/31302079/65385202-53206c00-dd1b-11e9-8914-a56369d76cd2.png)

### How it works/Usage
Type in console `addBubble("Foo")` and you add new bubble:\
![image](https://user-images.githubusercontent.com/31302079/65385254-20c33e80-dd1c-11e9-97cd-73c72f8aafdb.png)

### My hash function is simple and returns really different colours in case of changing first of last symbol to symbol next to him by ASCII table
`aTesta`, `bTesta` and `bTestb` hashes\
![image](https://user-images.githubusercontent.com/31302079/65385342-41d85f00-dd1d-11e9-95fd-aa221e2a5cab.png)

### Function `addBubble` takes string and creates new bubble

### Text colour is black if background colour is light, otherwise it's white
![image](https://user-images.githubusercontent.com/31302079/65385315-e5753f80-dd1c-11e9-9872-78065231a3d2.png)

### You can outcomment and make text have inverted colour of hashed one. Also, you can enable borders. But it looks weird
![image](https://user-images.githubusercontent.com/31302079/65385370-76e4b180-dd1d-11e9-89a9-2b392bacaf6d.png)

### This is just for fun. I just wanted to create name to colour hash function GMail have
