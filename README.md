# TPO-Front

## توضیحات کلی آزمون های TPO و نحوه پیاده سازی API
خب برای شروع باید بگم که ما 74 تا ازمون TPO داریم و داخل هر ازمون  TPO چهار تایپ داریم
1. Reading
2. Listening
3. Speaking
4. Writing

و همینطور 2 تا شرایط امتحان 

1. Test 
2. Practice 

البته باید بگم شرایط امتحان ها خیلی باهم فرق نداره فقط ما در پرکتیس یه اپشن هایی مثل ترجمه به کاربر میدیم که داخل تست اونارو غیر فعال میکنیم

و هر آزمونی که کاربر واردش میشه شامل چند Section میشه 
که همه کار ما با همین سکشن ها هست
و خب باید بکم هر سکشن یسری چیز ها داره 

1. Direction
2. Part
3. Questions

اینا به ترتیب اهمیتی هست که ما باید به کاربر نشون بدیم و اینم اضافه کنم گاهی اوقات یک ازمون ممکنه دایرکشن داشته باشه ولی پارت نداشته باشه گاهی اوقات ممکنه 
دایرکشن نداشته باشه ولی پارت داشته باشه 
گاهی اوقات ممکنه که سوال نداشته باشه 

و خب ببین اگه بخوام واضح تر بگم به این شکل هست
مثلا کاربر وارد آزمون 2 با تایپ 1 یعنی ریدینگ میشه 

و بعد تو یک ریکوست به بک اند میزنی و شماره ازمون و تایپش رو میفرستی برای بک اند 
و بک اند برای تو لیست سکشن های این ازمون رو میفرسته 
مثلا میگه سکشن 3 و 4 و 5 مال این ازمون هست
به این شکل 

```json
[
    {
        "id": 3,
        "name": "Passage 1",
        "order": 1
    },
    {
        "id": 4,
        "name": "Passege 2",
        "order": 2
    },
    {
        "id": 5,
        "name": "Passage 3",
        "order": 3
    }
]
```

بعد تو اینارو سمت فرانت نگه میداری 
بعد برای شروع ازمون به اولین سکشن سه تا ریکوست میزنی 

یکی برای گرفتن Directions
```json
[
    {
        "id": 1,
        "content": "In this part of the Reading section, you will read 3 passage. In the test you will have 60 minutes to read the passage and answer the questions.\n\nMost questions are worth 1 point but the last question in this set is worth more than 1 point. The directions indicate how many points you may receive.\n\nSome passages include a word or phrase that is underlined in blue. Click on the word or phrase to see a definition or an explanation.\n\nWhen you want to move to the next question, click on Next. You may skip questions and go back to them later if you want to return to previous questions, click on Back. You can click on Review at any time and the review screen will show you which questions you have answered and which you have not answered. From this review screen, you may go directly to any question you have already seen in the Reading section.\n\nClick on Continue to go on.",
        "files": []
    }
]
```

و ممکنه هر سکشن هیچی یا یکی یا چندین دایرکشن داشته باشه که اولویت نمایش دایرکشن ها هست


دومین ریکوستی که میزنی واسه گرفتن پارت ها هست که به این شکل هست خروجی که میگیری
```json
[
    {
        "id": 1,
        "name": "Groundwater",
        "content": "Groundwater is the word used to describe water that saturates the ground, filling all the available spaces. By far the most abundant type of groundwater is meteoric water; this is the groundwater that circulates as part of the water cycle. Ordinary meteoric water is water that has soaked into the ground from the surface, from precipitation (rain and snow) and from lakes and streams. There it remains, sometimes for long periods, before emerging at the surface again. At first thought it seems incredible that there can be enough space in the “solid” ground underfoot to hold all this water.\n\nThe necessary space is there, however, in many forms. The commonest spaces are those among the particles—sand grains and tiny pebbles—of loose, unconsolidated sand and gravel. Beds of this material, out of sight beneath the soil, are common. They are found wherever fast rivers carrying loads of coarse sediment once flowed. For example, as the great ice sheets that covered North America during the last ice age steadily melted away, huge volumes of water flowed from them. The water was always laden with pebbles, gravel, and sand, known as glacial outwash, that was deposited as the flow slowed down.\n\nThe same thing happens to this day, though on a smaller scale, wherever a sediment-laden river or stream emerges from a mountain valley onto relatively flat land, dropping its load as the current slows: the water usually spreads out fanwise, depositing the sediment in the form of a smooth, fan-shaped slope. Sediments are also dropped where a river slows on entering a lake or the sea, the deposited sediments are on a lake floor or the seafloor at first, but will be located inland at some future date, when the sea level falls or the land rises, and such beds are sometimes thousands of meters thick.\n\nIn lowland country almost any spot on the ground may overlie what was once the bed of a river that has since become buried by soil; if they are now below the water’s upper surface (the water table), the gravels and sands of the former riverbed, and its sandbars, will be saturated with groundwater.\n\nSo much for unconsolidated sediments. Consolidated (or cemented) sediments, too, contain millions of minute water-holding pores. This is because the gaps among the original grains are often not totally plugged with cementing chemicals; also, parts of the original grains may become dissolved by percolating groundwater, either while consolidation is taking place or at any time afterwards. The result is that sandstone, for example, can be as porous as the loose sand from which it was formed.\n\nThus a proportion of the total volume of any sediment, loose or cemented, consists of empty space. Most crystalline rocks are much more solid; a common exception is basalt, a form of solidified volcanic lava, which is sometimes full of tiny bubbles that make it very porous.\n\nThe proportion of empty space in a rock is known as its porosity. But note that porosity is not the same as permeability, which measures the ease with which water can flow through a material; this depends on the sizes of the individual cavities and the crevices linking them.\n\nMuch of the water in a sample of water-saturated sediment or rock will drain from it if the sample is put in a suitable dry place. But some will remain, clinging to all solid surfaces. It is held there by the force of surface tension without which water would drain instantly from any wet surface, leaving it totally dry. The total volume of water in the saturated sample must therefore be thought of as consisting of water that can, and water that cannot, drain away.\n\nThe relative amount of these two kinds of water varies greatly from one kind of rock or sediment to another, even though their porosities may be the same. What happens depends on pore size. If the pores are large, the water in them will exist as drops too heavy for surface tension to hold, and it will drain away; but if the pores are small enough, the water in them will exist as thin films, too light to overcome the force of surface tension holding them in place; then the water will be firmly held.",
        "file": [],
        "timeToRead": null,
        "order": 1
    }
]
```
و ممکنه هر سکشن هیچی یا یکی یا چندین پارت داشته باشه که اولویت دوم نمایش پارت ها هست


و در نهایت یک ریکوست میزنی که همه سوالات یک سکشن رو میگیری به این شکل
```json
[
    {
        "id": 1,
        "content": "🔷Groundwater is the word used to describe water that saturates the ground, filling all the available spaces. By far the most abundant type of groundwater is meteoric water; this is the groundwater that circulates as part of the water cycle. Ordinary meteoric water is water that has soaked into the ground from the surface, from precipitation (rain and snow) and from lakes and streams. There it remains, sometimes for long periods, before emerging at the surface again. At first thought it seems incredible that there can be enough space in the “solid” ground underfoot to hold all this water.\n\nThe necessary space is there, however, in many forms. The commonest spaces are those among the particles—sand grains and tiny pebbles—of loose, unconsolidated sand and gravel. Beds of this material, out of sight beneath the soil, are common. They are found wherever fast rivers carrying loads of coarse sediment once flowed. For example, as the great ice sheets that covered North America during the last ice age steadily melted away, huge volumes of water flowed from them. The water was always laden with pebbles, gravel, and sand, known as glacial outwash, that was deposited as the flow slowed down.\n\nThe same thing happens to this day, though on a smaller scale, wherever a sediment-laden river or stream emerges from a mountain valley onto relatively flat land, dropping its load as the current slows: the water usually spreads out fanwise, depositing the sediment in the form of a smooth, fan-shaped slope. Sediments are also dropped where a river slows on entering a lake or the sea, the deposited sediments are on a lake floor or the seafloor at first, but will be located inland at some future date, when the sea level falls or the land rises, and such beds are sometimes thousands of meters thick.\n\nIn lowland country almost any spot on the ground may overlie what was once the bed of a river that has since become buried by soil; if they are now below the water’s upper surface (the water table), the gravels and sands of the former riverbed, and its sandbars, will be saturated with groundwater.\n\nSo much for unconsolidated sediments. Consolidated (or cemented) sediments, too, contain millions of minute water-holding pores. This is because the gaps among the original grains are often not totally plugged with cementing chemicals; also, parts of the original grains may become dissolved by percolating groundwater, either while consolidation is taking place or at any time afterwards. The result is that sandstone, for example, can be as porous as the loose sand from which it was formed.\n\nThus a proportion of the total volume of any sediment, loose or cemented, consists of empty space. Most crystalline rocks are much more solid; a common exception is basalt, a form of solidified volcanic lava, which is sometimes full of tiny bubbles that make it very porous.\n\nThe proportion of empty space in a rock is known as its porosity. But note that porosity is not the same as permeability, which measures the ease with which water can flow through a material; this depends on the sizes of the individual cavities and the crevices linking them.\n\nMuch of the water in a sample of water-saturated sediment or rock will drain from it if the sample is put in a suitable dry place. But some will remain, clinging to all solid surfaces. It is held there by the force of surface tension without which water would drain instantly from any wet surface, leaving it totally dry. The total volume of water in the saturated sample must therefore be thought of as consisting of water that can, and water that cannot, drain away.\n\nThe relative amount of these two kinds of water varies greatly from one kind of rock or sediment to another, even though their porosities may be the same. What happens depends on pore size. If the pores are large, the water in them will exist as drops too heavy for surface tension to hold, and it will drain away; but if the pores are small enough, the water in them will exist as thin films, too light to overcome the force of surface tension holding them in place; then the water will be firmly held.\n",
        "file": [],
        "order": 1,
        "section": 1,
        "timeToAnswer": null,
        "questionText": "Which of the following can be inferred from paragraph 1 about the ground that we walk on?",
        "questionType": 0,
        "questionDirectionText": null
    },
    {
        "id": 2,
        "content": "Groundwater is the word used to describe water that saturates the ground, filling all the available spaces. By far the most abundant type of groundwater is meteoric water; this is the groundwater that circulates as part of the water cycle. Ordinary meteoric water is water that has soaked into the ground from the surface, from precipitation (rain and snow) and from lakes and streams. There it remains, sometimes for long periods, before emerging at the surface again. At first thought it seems‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍``` incredible``` that there can be enough space in the “solid” ground underfoot to hold all this water.\n\nThe necessary space is there, however, in many forms. The commonest spaces are those among the particles—sand grains and tiny pebbles—of loose, unconsolidated sand and gravel. Beds of this material, out of sight beneath the soil, are common. They are found wherever fast rivers carrying loads of coarse sediment once flowed. For example, as the great ice sheets that covered North America during the last ice age steadily melted away, huge volumes of water flowed from them. The water was always laden with pebbles, gravel, and sand, known as glacial outwash, that was deposited as the flow slowed down.\n\nThe same thing happens to this day, though on a smaller scale, wherever a sediment-laden river or stream emerges from a mountain valley onto relatively flat land, dropping its load as the current slows: the water usually spreads out fanwise, depositing the sediment in the form of a smooth, fan-shaped slope. Sediments are also dropped where a river slows on entering a lake or the sea, the deposited sediments are on a lake floor or the seafloor at first, but will be located inland at some future date, when the sea level falls or the land rises, and such beds are sometimes thousands of meters thick.\n\nIn lowland country almost any spot on the ground may overlie what was once the bed of a river that has since become buried by soil; if they are now below the water’s upper surface (the water table), the gravels and sands of the former riverbed, and its sandbars, will be saturated with groundwater.\n\nSo much for unconsolidated sediments. Consolidated (or cemented) sediments, too, contain millions of minute water-holding pores. This is because the gaps among the original grains are often not totally plugged with cementing chemicals; also, parts of the original grains may become dissolved by percolating groundwater, either while consolidation is taking place or at any time afterwards. The result is that sandstone, for example, can be as porous as the loose sand from which it was formed.\n\nThus a proportion of the total volume of any sediment, loose or cemented, consists of empty space. Most crystalline rocks are much more solid; a common exception is basalt, a form of solidified volcanic lava, which is sometimes full of tiny bubbles that make it very porous.\n\nThe proportion of empty space in a rock is known as its porosity. But note that porosity is not the same as permeability, which measures the ease with which water can flow through a material; this depends on the sizes of the individual cavities and the crevices linking them.\n\nMuch of the water in a sample of water-saturated sediment or rock will drain from it if the sample is put in a suitable dry place. But some will remain, clinging to all solid surfaces. It is held there by the force of surface tension without which water would drain instantly from any wet surface, leaving it totally dry. The total volume of water in the saturated sample must therefore be thought of as consisting of water that can, and water that cannot, drain away.\n\nThe relative amount of these two kinds of water varies greatly from one kind of rock or sediment to another, even though their porosities may be the same. What happens depends on pore size. If the pores are large, the water in them will exist as drops too heavy for surface tension to hold, and it will drain away; but if the pores are small enough, the water in them will exist as thin films, too light to overcome the force of surface tension holding them in place; then the water will be firmly held.\n",
        "file": [],
        "order": 2,
        "section": 1,
        "timeToAnswer": null,
        "questionText": "The word “```incredible```” in the passage is closest in meaning to",
        "questionType": 0,
        "questionDirectionText": null
    },
    {
        "id": 3,
        "content": "Groundwater is the word used to describe water that saturates the ground, filling all the available spaces. By far the most abundant type of groundwater is meteoric water; this is the groundwater that circulates as part of the water cycle. Ordinary meteoric water is water that has soaked into the ground from the surface, from precipitation (rain and snow) and from lakes and streams. There it remains, sometimes for long periods, before emerging at the surface again. At first thought it seems incredible that there can be enough space in the “solid” ground underfoot to hold all this water.\n\nThe necessary space is there, however, in many forms. The commonest spaces are those among the particles—sand grains and tiny pebbles—of loose, unconsolidated sand and gravel. Beds of this material,``` out of sight``` beneath the soil, are common. They are found wherever fast rivers carrying loads of coarse sediment once flowed. For example, as the great ice sheets that covered North America during the last ice age steadily melted away, huge volumes of water flowed from them. The water was always laden with pebbles, gravel, and sand, known as glacial outwash, that was deposited as the flow slowed down.\n\nThe same thing happens to this day, though on a smaller scale, wherever a sediment-laden river or stream emerges from a mountain valley onto relatively flat land, dropping its load as the current slows: the water usually spreads out fanwise, depositing the sediment in the form of a smooth, fan-shaped slope. Sediments are also dropped where a river slows on entering a lake or the sea, the deposited sediments are on a lake floor or the seafloor at first, but will be located inland at some future date, when the sea level falls or the land rises, and such beds are sometimes thousands of meters thick.\n\nIn lowland country almost any spot on the ground may overlie what was once the bed of a river that has since become buried by soil; if they are now below the water’s upper surface (the water table), the gravels and sands of the former riverbed, and its sandbars, will be saturated with groundwater.\n\nSo much for unconsolidated sediments. Consolidated (or cemented) sediments, too, contain millions of minute water-holding pores. This is because the gaps among the original grains are often not totally plugged with cementing chemicals; also, parts of the original grains may become dissolved by percolating groundwater, either while consolidation is taking place or at any time afterwards. The result is that sandstone, for example, can be as porous as the loose sand from which it was formed.\n\nThus a proportion of the total volume of any sediment, loose or cemented, consists of empty space. Most crystalline rocks are much more solid; a common exception is basalt, a form of solidified volcanic lava, which is sometimes full of tiny bubbles that make it very porous.\n\nThe proportion of empty space in a rock is known as its porosity. But note that porosity is not the same as permeability, which measures the ease with which water can flow through a material; this depends on the sizes of the individual cavities and the crevices linking them.\n\nMuch of the water in a sample of water-saturated sediment or rock will drain from it if the sample is put in a suitable dry place. But some will remain, clinging to all solid surfaces. It is held there by the force of surface tension without which water would drain instantly from any wet surface, leaving it totally dry. The total volume of water in the saturated sample must therefore be thought of as consisting of water that can, and water that cannot, drain away.\n\nThe relative amount of these two kinds of water varies greatly from one kind of rock or sediment to another, even though their porosities may be the same. What happens depends on pore size. If the pores are large, the water in them will exist as drops too heavy for surface tension to hold, and it will drain away; but if the pores are small enough, the water in them will exist as thin films, too light to overcome the force of surface tension holding them in place; then the water will be firmly held.\n",
        "file": [],
        "order": 3,
        "section": 1,
        "timeToAnswer": null,
        "questionText": "The word “```out of sight```” in the passage is closest in meaning to",
        "questionType": 0,
        "questionDirectionText": null
    },
    {
        "id": 4,
        "content": "🔷The necessary space is there, however, in many forms. The commonest spaces are those among the particles—sand grains and tiny pebbles—of loose, unconsolidated sand and gravel. Beds of this material, out of sight beneath the soil, are common. They are found wherever fast rivers carrying loads of coarse sediment once flowed. For example, as the great ice sheets that covered North America during the last ice age steadily melted away, huge volumes of water flowed from them. The water was always laden with pebbles, gravel, and sand, known as glacial outwash, that was deposited as the flow slowed down.\n\nThe same thing happens to this day, though on a smaller scale, wherever a sediment-laden river or stream emerges from a mountain valley onto relatively flat land, dropping its load as the current slows: the water usually spreads out fanwise, depositing the sediment in the form of a smooth, fan-shaped slope. Sediments are also dropped where a river slows on entering a lake or the sea, the deposited sediments are on a lake floor or the seafloor at first, but will be located inland at some future date, when the sea level falls or the land rises, and such beds are sometimes thousands of meters thick.\n\nIn lowland country almost any spot on the ground may overlie what was once the bed of a river that has since become buried by soil; if they are now below the water’s upper surface (the water table), the gravels and sands of the former riverbed, and its sandbars, will be saturated with groundwater.\n\nSo much for unconsolidated sediments. Consolidated (or cemented) sediments, too, contain millions of minute water-holding pores. This is because the gaps among the original grains are often not totally plugged with cementing chemicals; also, parts of the original grains may become dissolved by percolating groundwater, either while consolidation is taking place or at any time afterwards. The result is that sandstone, for example, can be as porous as the loose sand from which it was formed.\n\nThus a proportion of the total volume of any sediment, loose or cemented, consists of empty space. Most crystalline rocks are much more solid; a common exception is basalt, a form of solidified volcanic lava, which is sometimes full of tiny bubbles that make it very porous.\n\nThe proportion of empty space in a rock is known as its porosity. But note that porosity is not the same as permeability, which measures the ease with which water can flow through a material; this depends on the sizes of the individual cavities and the crevices linking them.\n\nMuch of the water in a sample of water-saturated sediment or rock will drain from it if the sample is put in a suitable dry place. But some will remain, clinging to all solid surfaces. It is held there by the force of surface tension without which water would drain instantly from any wet surface, leaving it totally dry. The total volume of water in the saturated sample must therefore be thought of as consisting of water that can, and water that cannot, drain away.\n\nThe relative amount of these two kinds of water varies greatly from one kind of rock or sediment to another, even though their porosities may be the same. What happens depends on pore size. If the pores are large, the water in them will exist as drops too heavy for surface tension to hold, and it will drain away; but if the pores are small enough, the water in them will exist as thin films, too light to overcome the force of surface tension holding them in place; then the water will be firmly held.\n",
        "file": [],
        "order": 4,
        "section": 1,
        "timeToAnswer": null,
        "questionText": "According to paragraph 2, where is groundwater usually found?",
        "questionType": 0,
        "questionDirectionText": null
    }
]
```
بعد از اینکه دایرکشن ها و پارت ها و سوالات رو نشون دادی میری سراغ سکشن بعدی و سه تا ریکوست برای اون میزنی و اونو نشون میدی 
و اینم بگم نحوه نمایش هر تایپ داخل فرانت ممکنه فرق داشته باشه 
برای همین قدم به قدم باهم میریم جلو 
و هر بخش رو که پیاده کردیم میریم سراغ بخش بعدی

ولی نحوه گرفتن دیتای همه ازمون ها و همه تایپ ها به همین شکل هست



