// Edit this one file to manage the starter wiki. All examples are placeholders.
window.WIKI_DATA = {
  site: {name:'The World Codex', subtitle:'An independent encyclopedia for a world in the making', version:'0.1', edition:'Pre-Alpha', patchTitle:'Foundations of a New World', patchDate:'Development preview', patchSummary:'The first glimpse of a living world: its peoples, the wisp journey, and the lands beyond the closed gates.', status:'In development'},
  highlights: [
    {title:'Character Beginnings',tag:'FEATURE',desc:'The first journey begins as a wisp, long before the great cities open their gates.',link:'wisp-origins'},
    {title:'Peoples of the World',tag:'WORLD GUIDE',desc:'Discover the familiar and unusual peoples who call this world home.',link:'races'},
    {title:'The Closed Gates',tag:'LORE',desc:'Learn why the world’s greatest cities remain distant from new arrivals.',link:'closed-gates'}
  ],
  notices:[
    {date:'PREVIEW',title:'Welcome to the new community encyclopedia',desc:'This is starter sample content, not a published announcement.',link:'about'},
    {date:'ROADMAP',title:'Game information and patch tracking',desc:'Future version notes can be maintained right here.',link:'patches'},
    {date:'COMMUNITY',title:'How contributions will work',desc:'Public browsing now; moderated player editing is planned for later.',link:'contributing'}
  ],
  events:[
    {label:'Worldbuilding',name:'The Peoples of the World',status:'Ongoing',link:'races'},
    {label:'Development',name:'Early Game Systems',status:'Planning',link:'wisp-origins'},
    {label:'Wiki',name:'Founding Articles',status:'Open',link:'about'}
  ],
  groups:[
    {name:'Getting Started',icon:'✦',items:[['New Player Guide','new-player-guide'],['Wisp Origins','wisp-origins'],['Game Systems','systems'],['Frequently Asked Questions','faq']]},
    {name:'The World',icon:'◈',items:[['Races','races'],['Civilizations','civilizations'],['Regions & Locations','regions'],['Major Cities','major-cities'],['Racial Homelands','racial-homelands'],['World Forges','world-forges'],['The Closed Gates','closed-gates']]},
    {name:'Adventuring',icon:'⚔',items:[['Classes & Roles','classes'],['Quests','quests'],['Creatures','creatures'],['Dungeons','dungeons']]},
    {name:'Items & Crafting',icon:'◇',items:[['Items','items'],['Equipment','equipment'],['Gathering','gathering'],['Crafting','crafting']]},
    {name:'Community',icon:'☷',items:[['Patches','patches'],['Wiki Guidelines','contributing'],['About the Wiki','about'],['All Articles','all-articles']]}
  ],
  // Wiki preview only: these are illustrative milestones, not release announcements.
  patchCatalog:[
  {
    "id": "foundations",
    "title": "Foundations — Pre-Alpha",
    "description": "Illustrative release records; no announced dates.",
    "entries": [
      {
        "version": "0.1",
        "title": "Foundations of a New World",
        "summary": "Example major milestone for the first era of development.",
        "date": "Not announced",
        "status": "Planned",
        "image": "",
        "promoUrl": "",
        "notesUrl": "",
        "sections": [
          {
            "type": "list",
            "heading": "Summary",
            "items": [
              "Add an overview of the main additions in this release."
            ]
          },
          {
            "type": "table",
            "heading": "Main Scenario Quests",
            "columns": [
              "Quest",
              "Level",
              "Quest giver",
              "Unlocks",
              "Rewards"
            ],
            "rows": []
          },
          {
            "type": "table",
            "heading": "Dungeons",
            "columns": [
              "Duty",
              "Level requirement",
              "Quest requirement"
            ],
            "rows": []
          },
          {
            "type": "table",
            "heading": "Trials",
            "columns": [
              "Duty",
              "Difficulty",
              "Level requirement",
              "Unlock"
            ],
            "rows": []
          },
          {
            "type": "table",
            "heading": "Raids",
            "columns": [
              "Duty",
              "Level requirement",
              "Unlock"
            ],
            "rows": []
          },
          {
            "type": "list",
            "heading": "Sidequests",
            "items": []
          },
          {
            "type": "list",
            "heading": "PvP",
            "items": []
          },
          {
            "type": "list",
            "heading": "New Items and Equipment",
            "items": []
          },
          {
            "type": "list",
            "heading": "Crafting and Gathering",
            "items": []
          },
          {
            "type": "list",
            "heading": "Housing",
            "items": []
          },
          {
            "type": "list",
            "heading": "System Changes",
            "items": []
          },
          {
            "type": "list",
            "heading": "Bug Fixes",
            "items": []
          }
        ],
        "subpatches": [
          {
            "version": "0.1.1",
            "title": "Foundations — Follow-up One",
            "summary": "Details for the first follow-up update.",
            "date": "Not announced",
            "status": "Planned",
            "image": "",
            "promoUrl": "",
            "notesUrl": "",
            "sections": [
              {
                "type": "list",
                "heading": "Summary",
                "items": [
                  "Add an overview of the main additions in this release."
                ]
              },
              {
                "type": "table",
                "heading": "Main Scenario Quests",
                "columns": [
                  "Quest",
                  "Level",
                  "Quest giver",
                  "Unlocks",
                  "Rewards"
                ],
                "rows": []
              },
              {
                "type": "table",
                "heading": "Dungeons",
                "columns": [
                  "Duty",
                  "Level requirement",
                  "Quest requirement"
                ],
                "rows": []
              },
              {
                "type": "table",
                "heading": "Trials",
                "columns": [
                  "Duty",
                  "Difficulty",
                  "Level requirement",
                  "Unlock"
                ],
                "rows": []
              },
              {
                "type": "table",
                "heading": "Raids",
                "columns": [
                  "Duty",
                  "Level requirement",
                  "Unlock"
                ],
                "rows": []
              },
              {
                "type": "list",
                "heading": "Sidequests",
                "items": []
              },
              {
                "type": "list",
                "heading": "PvP",
                "items": []
              },
              {
                "type": "list",
                "heading": "New Items and Equipment",
                "items": []
              },
              {
                "type": "list",
                "heading": "Crafting and Gathering",
                "items": []
              },
              {
                "type": "list",
                "heading": "Housing",
                "items": []
              },
              {
                "type": "list",
                "heading": "System Changes",
                "items": []
              },
              {
                "type": "list",
                "heading": "Bug Fixes",
                "items": []
              }
            ]
          },
          {
            "version": "0.1.2",
            "title": "Foundations — Follow-up Two",
            "summary": "Details for the second follow-up update.",
            "date": "Not announced",
            "status": "Planned",
            "image": "",
            "promoUrl": "",
            "notesUrl": "",
            "sections": [
              {
                "type": "list",
                "heading": "Summary",
                "items": [
                  "Add an overview of the main additions in this release."
                ]
              },
              {
                "type": "table",
                "heading": "Main Scenario Quests",
                "columns": [
                  "Quest",
                  "Level",
                  "Quest giver",
                  "Unlocks",
                  "Rewards"
                ],
                "rows": []
              },
              {
                "type": "table",
                "heading": "Dungeons",
                "columns": [
                  "Duty",
                  "Level requirement",
                  "Quest requirement"
                ],
                "rows": []
              },
              {
                "type": "table",
                "heading": "Trials",
                "columns": [
                  "Duty",
                  "Difficulty",
                  "Level requirement",
                  "Unlock"
                ],
                "rows": []
              },
              {
                "type": "table",
                "heading": "Raids",
                "columns": [
                  "Duty",
                  "Level requirement",
                  "Unlock"
                ],
                "rows": []
              },
              {
                "type": "list",
                "heading": "Sidequests",
                "items": []
              },
              {
                "type": "list",
                "heading": "PvP",
                "items": []
              },
              {
                "type": "list",
                "heading": "New Items and Equipment",
                "items": []
              },
              {
                "type": "list",
                "heading": "Crafting and Gathering",
                "items": []
              },
              {
                "type": "list",
                "heading": "Housing",
                "items": []
              },
              {
                "type": "list",
                "heading": "System Changes",
                "items": []
              },
              {
                "type": "list",
                "heading": "Bug Fixes",
                "items": []
              }
            ]
          }
        ]
      },
      {
        "version": "0.2",
        "title": "The World Takes Shape",
        "summary": "Illustrative future update; not confirmed.",
        "date": "Not announced",
        "status": "Planned",
        "image": "",
        "promoUrl": "",
        "notesUrl": "",
        "sections": [
          {
            "type": "list",
            "heading": "Summary",
            "items": [
              "Add an overview of the main additions in this release."
            ]
          },
          {
            "type": "table",
            "heading": "Main Scenario Quests",
            "columns": [
              "Quest",
              "Level",
              "Quest giver",
              "Unlocks",
              "Rewards"
            ],
            "rows": []
          },
          {
            "type": "table",
            "heading": "Dungeons",
            "columns": [
              "Duty",
              "Level requirement",
              "Quest requirement"
            ],
            "rows": []
          },
          {
            "type": "table",
            "heading": "Trials",
            "columns": [
              "Duty",
              "Difficulty",
              "Level requirement",
              "Unlock"
            ],
            "rows": []
          },
          {
            "type": "table",
            "heading": "Raids",
            "columns": [
              "Duty",
              "Level requirement",
              "Unlock"
            ],
            "rows": []
          },
          {
            "type": "list",
            "heading": "Sidequests",
            "items": []
          },
          {
            "type": "list",
            "heading": "PvP",
            "items": []
          },
          {
            "type": "list",
            "heading": "New Items and Equipment",
            "items": []
          },
          {
            "type": "list",
            "heading": "Crafting and Gathering",
            "items": []
          },
          {
            "type": "list",
            "heading": "Housing",
            "items": []
          },
          {
            "type": "list",
            "heading": "System Changes",
            "items": []
          },
          {
            "type": "list",
            "heading": "Bug Fixes",
            "items": []
          }
        ],
        "subpatches": []
      }
    ]
  },
  {
    "id": "future",
    "title": "Future Updates",
    "description": "Reserved for future release history.",
    "entries": [
      {
        "version": "0.x",
        "title": "To Be Announced",
        "summary": "Future update placeholder.",
        "date": "Not announced",
        "status": "Planned",
        "image": "",
        "promoUrl": "",
        "notesUrl": "",
        "sections": [
          {
            "type": "list",
            "heading": "Summary",
            "items": [
              "Add an overview of the main additions in this release."
            ]
          },
          {
            "type": "table",
            "heading": "Main Scenario Quests",
            "columns": [
              "Quest",
              "Level",
              "Quest giver",
              "Unlocks",
              "Rewards"
            ],
            "rows": []
          },
          {
            "type": "table",
            "heading": "Dungeons",
            "columns": [
              "Duty",
              "Level requirement",
              "Quest requirement"
            ],
            "rows": []
          },
          {
            "type": "table",
            "heading": "Trials",
            "columns": [
              "Duty",
              "Difficulty",
              "Level requirement",
              "Unlock"
            ],
            "rows": []
          },
          {
            "type": "table",
            "heading": "Raids",
            "columns": [
              "Duty",
              "Level requirement",
              "Unlock"
            ],
            "rows": []
          },
          {
            "type": "list",
            "heading": "Sidequests",
            "items": []
          },
          {
            "type": "list",
            "heading": "PvP",
            "items": []
          },
          {
            "type": "list",
            "heading": "New Items and Equipment",
            "items": []
          },
          {
            "type": "list",
            "heading": "Crafting and Gathering",
            "items": []
          },
          {
            "type": "list",
            "heading": "Housing",
            "items": []
          },
          {
            "type": "list",
            "heading": "System Changes",
            "items": []
          },
          {
            "type": "list",
            "heading": "Bug Fixes",
            "items": []
          }
        ],
        "subpatches": []
      }
    ]
  }
],
  articles:[
    {"slug":"races","title":"Races","category":"The World","excerpt":"The six playable peoples of the world.","lead":"Explore the six playable races and open their dedicated profiles.","sections":[{"heading":"Playable races","text":"Valori, Sylvarieth, Tovari, Veyrathi, Aelthari, and Mirrali."}],"related":["valori","sylvarieth","tovari","veyrathi","aelthari","mirrali"]},
    {"slug":"valori","title":"Valori","category":"Races","excerpt":"Humans; one of the six playable races.","lead":"The Valori are the human people of the world. Their regional cultures, historical origins, and communities will be detailed as development continues.","infobox":{"Type":"Playable race","Appearance":"Human","Status":"In development"},"sections":[{"heading":"Overview","text":"The Valori are the human playable race."},{"heading":"Culture and society","text":"Their cultures, societies, and regional traditions have not yet been finalized."},{"heading":"Homelands","text":"The Valori homelands and major settlements have not yet been established for this wiki."}],"related":["races","civilizations","varrengate"]},
    {"slug":"sylvarieth","title":"Sylvarieth","category":"Races","excerpt":"Elves; one of the six playable races.","lead":"The Sylvarieth are the elven people of the world. Their distinct history and culture are still being developed.","infobox":{"Type":"Playable race","Appearance":"Elven","Status":"In development"},"sections":[{"heading":"Overview","text":"The Sylvarieth are the elven playable race."},{"heading":"Culture and society","text":"Their customs, traditions, and cultural identity are awaiting final design."},{"heading":"Homelands","text":"Their settlements and homelands have not yet been confirmed."}],"related":["races","civilizations","thornweald"]},
    {"slug":"tovari","title":"Tovari","category":"Races","excerpt":"A very short humanoid playable race.","lead":"The Tovari are a very short humanoid people. Their small stature is an established part of their design; other characteristics are still open.","infobox":{"Type":"Playable race","Appearance":"Very short humanoid","Status":"In development"},"sections":[{"heading":"Overview","text":"The Tovari are one of the six playable races, distinguished by their very short stature."},{"heading":"Physical appearance","text":"Their precise proportions, clothing, and other visual features are still to be determined."},{"heading":"Culture and society","text":"Tovari history, culture, and settlements have not been finalized."}],"related":["races","civilizations","varrengate"]},
    {"slug":"veyrathi","title":"Veyrathi","category":"Races","excerpt":"A horned, scaled, and tailed playable race.","lead":"The Veyrathi are a people distinguished by horns, scales, and tails. Their appearance draws broad inspiration from Au Ra, while their identity and lore are being developed as original worldbuilding.","infobox":{"Type":"Playable race","Appearance":"Horns, scales, tail","Status":"In development"},"sections":[{"heading":"Overview","text":"The Veyrathi are a playable race with horns, scales, and tails."},{"heading":"Physical appearance","text":"Horns, scaling, and tails are established design features. Specific variations and visual details are still undecided."},{"heading":"Culture and society","text":"Their homeland, history, and traditions have not yet been finalized."}],"related":["races","civilizations"]},
    {"slug":"aelthari","title":"Aelthari","category":"Races","excerpt":"A hooved, horned playable race.","lead":"The Aelthari are a hooved and horned people. The original race concept takes broad inspiration from Draenei, with its own lore and visual identity still to be developed.","infobox":{"Type":"Playable race","Appearance":"Hooves and horns","Status":"In development"},"sections":[{"heading":"Overview","text":"The Aelthari are a playable race defined in concept by hooves and horns."},{"heading":"Physical appearance","text":"The final body design and the range of physical variations remain under development."},{"heading":"Culture and society","text":"Their society, origins, and settlements are not yet documented."}],"related":["races","civilizations","caelthara"]},
    {"slug":"mirrali","title":"Mirrali","category":"Races","excerpt":"A pony-inspired playable race; its final physical design remains undecided.","lead":"The Mirrali are an original pony-inspired playable race. Their final physical design has not yet been decided.","infobox":{"Type":"Playable race","Appearance":"Pony-inspired; undecided","Status":"In development"},"sections":[{"heading":"Overview","text":"The Mirrali are one of the six playable peoples. The race concept is pony-inspired, but its finished form has not been settled."},{"heading":"Physical appearance","text":"Body proportions, leg structure, and other defining physical features remain open design questions."},{"heading":"Culture and society","text":"Mirrali culture, history, and homeland will be developed in a later lore pass."}],"related":["races","civilizations","thornweald"]},
    {"slug":"major-cities","title":"Major Cities","category":"The World","excerpt":"The three established major cities of the world.","lead":"Caelthara, Thornweald, and Varrengate are the three major cities currently established in the world.","sections":[{"heading":"Cities","text":"Caelthara — City of Stars; Aelthari scholarly capital. Thornweald — The Living Canopy; Sylvarieth and Mirrali woodland city. Varrengate — The Thousand Markets; Valori and Tovari trading capital."}],"related":["caelthara","thornweald","varrengate"]},
    {"slug":"caelthara","title":"Caelthara","category":"Major Cities","excerpt":"City of Stars — Aelthari scholarly capital.","lead":"Caelthara is known as City of Stars, aelthari scholarly capital.","infobox":{"Type":"Major city","Epithet":"City of Stars","Associated races":"Aelthari","Identity":"Scholarship","Details":"In development"},"sections":[{"heading":"Overview","text":"Caelthara is known as City of Stars. Aelthari scholarly capital."},{"heading":"People and culture","text":"The city is associated with Aelthari. Further details about its population and culture have not yet been established."},{"heading":"History and locations","text":"The city's history, neighborhoods, landmarks, and services can be documented here as they are developed."}],"related":["major-cities","civilizations","aelthari"]},
    {"slug":"thornweald","title":"Thornweald","category":"Major Cities","excerpt":"The Living Canopy — Sylvarieth and Mirrali woodland city.","lead":"Thornweald is known as The Living Canopy, sylvarieth and Mirrali woodland city.","infobox":{"Type":"Major city","Epithet":"The Living Canopy","Associated races":"Sylvarieth, Mirrali","Identity":"Woodland city","Details":"In development"},"sections":[{"heading":"Overview","text":"Thornweald is known as The Living Canopy. Sylvarieth and Mirrali woodland city."},{"heading":"People and culture","text":"The city is associated with Sylvarieth and Mirrali. Further details about its population and culture have not yet been established."},{"heading":"History and locations","text":"The city's history, neighborhoods, landmarks, and services can be documented here as they are developed."}],"related":["major-cities","civilizations","sylvarieth","mirrali"]},
    {"slug":"varrengate","title":"Varrengate","category":"Major Cities","excerpt":"The Thousand Markets — Valori and Tovari trading capital.","lead":"Varrengate is known as The Thousand Markets, valori and Tovari trading capital.","infobox":{"Type":"Major city","Epithet":"The Thousand Markets","Associated races":"Valori, Tovari","Identity":"Trade","Details":"In development"},"sections":[{"heading":"Overview","text":"Varrengate is known as The Thousand Markets. Valori and Tovari trading capital."},{"heading":"People and culture","text":"The city is associated with Valori and Tovari. Further details about its population and culture have not yet been established."},{"heading":"History and locations","text":"The city's history, neighborhoods, landmarks, and services can be documented here as they are developed."}],"related":["major-cities","civilizations","valori","tovari"]},
    {"slug":"regions","title":"Regions & Locations","category":"The World","excerpt":"Explore the nine established regions, landmarks, and settlements.","lead":"The world includes wilderness, ancient ruins, shattered landscapes, and settlements that players will encounter throughout their journey.","sections":[{"heading":"Known locations","text":"The Silent Vale — Starting wilderness and ruined villages. Weepingwood — Ancient enchanted forest. The Sunken Halls — Underground ruins and former civilizations. The Mourning Coast — Haunted coastline and abandoned ports. The Fractured Peaks — Shattered mountain region. The Ashen Expanse — Ancient battlefields and grasslands. The Glass Wastes — Crystallized wasteland. The Broken Crown — Former great capital, accessible much later. The Refuge — Initial player settlement and social hub."}],"related":["silent-vale","weepingwood","sunken-halls","mourning-coast","fractured-peaks","ashen-expanse","glass-wastes","broken-crown","refuge"]},
    {"slug":"silent-vale","title":"The Silent Vale","category":"Regions & Locations","excerpt":"Starting wilderness and ruined villages.","lead":"The Silent Vale — starting wilderness and ruined villages.","infobox":{"Type":"Region","Description":"Starting wilderness and ruined villages","Access":"Starting area","Status":"Lore in development"},"sections":[{"heading":"Overview","text":"The Silent Vale is known as starting wilderness and ruined villages."},{"heading":"Environment and landmarks","text":"Further information about the landscape, landmarks, and points of interest will be added as development continues."},{"heading":"History and inhabitants","text":"The history and inhabitants of this location have not yet been documented."}],"related":["regions"]},
    {"slug":"weepingwood","title":"Weepingwood","category":"Regions & Locations","excerpt":"Ancient enchanted forest.","lead":"Weepingwood — ancient enchanted forest.","infobox":{"Type":"Region","Description":"Ancient enchanted forest","Access":"Undecided","Status":"Lore in development"},"sections":[{"heading":"Overview","text":"Weepingwood is known as ancient enchanted forest."},{"heading":"Environment and landmarks","text":"Further information about the landscape, landmarks, and points of interest will be added as development continues."},{"heading":"History and inhabitants","text":"The history and inhabitants of this location have not yet been documented."}],"related":["regions"]},
    {"slug":"sunken-halls","title":"The Sunken Halls","category":"Regions & Locations","excerpt":"Underground ruins and former civilizations.","lead":"The Sunken Halls — underground ruins and former civilizations.","infobox":{"Type":"Location","Description":"Underground ruins and former civilizations","Access":"Undecided","Status":"Lore in development"},"sections":[{"heading":"Overview","text":"The Sunken Halls is known as underground ruins and former civilizations."},{"heading":"Environment and landmarks","text":"Further information about the landscape, landmarks, and points of interest will be added as development continues."},{"heading":"History and inhabitants","text":"The history and inhabitants of this location have not yet been documented."}],"related":["regions"]},
    {"slug":"mourning-coast","title":"The Mourning Coast","category":"Regions & Locations","excerpt":"Haunted coastline and abandoned ports.","lead":"The Mourning Coast — haunted coastline and abandoned ports.","infobox":{"Type":"Region","Description":"Haunted coastline and abandoned ports","Access":"Undecided","Status":"Lore in development"},"sections":[{"heading":"Overview","text":"The Mourning Coast is known as haunted coastline and abandoned ports."},{"heading":"Environment and landmarks","text":"Further information about the landscape, landmarks, and points of interest will be added as development continues."},{"heading":"History and inhabitants","text":"The history and inhabitants of this location have not yet been documented."}],"related":["regions"]},
    {"slug":"fractured-peaks","title":"The Fractured Peaks","category":"Regions & Locations","excerpt":"Shattered mountain region.","lead":"The Fractured Peaks — shattered mountain region.","infobox":{"Type":"Region","Description":"Shattered mountain region","Access":"Undecided","Status":"Lore in development"},"sections":[{"heading":"Overview","text":"The Fractured Peaks is known as shattered mountain region."},{"heading":"Environment and landmarks","text":"Further information about the landscape, landmarks, and points of interest will be added as development continues."},{"heading":"History and inhabitants","text":"The history and inhabitants of this location have not yet been documented."}],"related":["regions"]},
    {"slug":"ashen-expanse","title":"The Ashen Expanse","category":"Regions & Locations","excerpt":"Ancient battlefields and grasslands.","lead":"The Ashen Expanse — ancient battlefields and grasslands.","infobox":{"Type":"Region","Description":"Ancient battlefields and grasslands","Access":"Undecided","Status":"Lore in development"},"sections":[{"heading":"Overview","text":"The Ashen Expanse is known as ancient battlefields and grasslands."},{"heading":"Environment and landmarks","text":"Further information about the landscape, landmarks, and points of interest will be added as development continues."},{"heading":"History and inhabitants","text":"The history and inhabitants of this location have not yet been documented."}],"related":["regions"]},
    {"slug":"glass-wastes","title":"The Glass Wastes","category":"Regions & Locations","excerpt":"Crystallized wasteland.","lead":"The Glass Wastes — crystallized wasteland.","infobox":{"Type":"Region","Description":"Crystallized wasteland","Access":"Undecided","Status":"Lore in development"},"sections":[{"heading":"Overview","text":"The Glass Wastes is known as crystallized wasteland."},{"heading":"Environment and landmarks","text":"Further information about the landscape, landmarks, and points of interest will be added as development continues."},{"heading":"History and inhabitants","text":"The history and inhabitants of this location have not yet been documented."}],"related":["regions"]},
    {"slug":"broken-crown","title":"The Broken Crown","category":"Regions & Locations","excerpt":"Former great capital, accessible much later.","lead":"The Broken Crown — former great capital, accessible much later.","infobox":{"Type":"Location","Description":"Former great capital, accessible much later","Access":"Later progression","Status":"Lore in development"},"sections":[{"heading":"Overview","text":"The Broken Crown is known as former great capital, accessible much later."},{"heading":"Environment and landmarks","text":"Further information about the landscape, landmarks, and points of interest will be added as development continues."},{"heading":"History and inhabitants","text":"The history and inhabitants of this location have not yet been documented."}],"related":["regions","major-cities"]},
    {"slug":"refuge","title":"The Refuge","category":"Regions & Locations","excerpt":"Initial player settlement and social hub.","lead":"The Refuge — initial player settlement and social hub.","infobox":{"Type":"Settlement","Description":"Initial player settlement and social hub","Access":"Starting hub","Status":"Lore in development"},"sections":[{"heading":"Overview","text":"The Refuge is known as initial player settlement and social hub."},{"heading":"Environment and landmarks","text":"Further information about the landscape, landmarks, and points of interest will be added as development continues."},{"heading":"History and inhabitants","text":"The history and inhabitants of this location have not yet been documented."}],"related":["regions","wisp-origins"]},
    {"slug":"racial-homelands","title":"Racial Homelands","category":"The World","excerpt":"Homelands of the six playable races.","lead":"Six racial homelands are established.","sections":[],"related":["central-vales","elderwood","hearthburrows","veyran-highlands","astral-marches","blooming-reach"]},
    {"slug":"world-forges","title":"The Four World Forges","category":"The World","excerpt":"Two Greater Forges and two World Forges.","lead":"Four named forges are established.","sections":[],"related":["forge-of-souls","forge-of-creation","forge-of-runes","forge-of-wills"]},
    {"slug":"central-vales","title":"The Central Vales","category":"Racial Homelands","excerpt":"Homeland of the Valori.","lead":"The Central Vales is associated with the Valori.","infobox":{"Associated race":"Valori","Type":"Racial homeland"},"sections":[{"heading":"Overview","text":"The Central Vales is the homeland of the Valori."},{"heading":"Geography","text":"Details to be established."},{"heading":"History","text":"Details to be established."}],"related":["racial-homelands","valori"]},
    {"slug":"elderwood","title":"The Elderwood","category":"Racial Homelands","excerpt":"Homeland of the Sylvarieth.","lead":"The Elderwood is associated with the Sylvarieth.","infobox":{"Associated race":"Sylvarieth","Type":"Racial homeland"},"sections":[{"heading":"Overview","text":"The Elderwood is the homeland of the Sylvarieth."},{"heading":"Geography","text":"Details to be established."},{"heading":"History","text":"Details to be established."}],"related":["racial-homelands","sylvarieth"]},
    {"slug":"hearthburrows","title":"The Hearthburrows","category":"Racial Homelands","excerpt":"Homeland of the Tovari.","lead":"The Hearthburrows is associated with the Tovari.","infobox":{"Associated race":"Tovari","Type":"Racial homeland"},"sections":[{"heading":"Overview","text":"The Hearthburrows is the homeland of the Tovari."},{"heading":"Geography","text":"Details to be established."},{"heading":"History","text":"Details to be established."}],"related":["racial-homelands","tovari"]},
    {"slug":"veyran-highlands","title":"The Veyran Highlands","category":"Racial Homelands","excerpt":"Homeland of the Veyrathi.","lead":"The Veyran Highlands is associated with the Veyrathi.","infobox":{"Associated race":"Veyrathi","Type":"Racial homeland"},"sections":[{"heading":"Overview","text":"The Veyran Highlands is the homeland of the Veyrathi."},{"heading":"Geography","text":"Details to be established."},{"heading":"History","text":"Details to be established."}],"related":["racial-homelands","veyrathi"]},
    {"slug":"astral-marches","title":"The Astral Marches","category":"Racial Homelands","excerpt":"Homeland of the Aelthari.","lead":"The Astral Marches is associated with the Aelthari.","infobox":{"Associated race":"Aelthari","Type":"Racial homeland"},"sections":[{"heading":"Overview","text":"The Astral Marches is the homeland of the Aelthari."},{"heading":"Geography","text":"Details to be established."},{"heading":"History","text":"Details to be established."}],"related":["racial-homelands","aelthari"]},
    {"slug":"blooming-reach","title":"The Blooming Reach","category":"Racial Homelands","excerpt":"Homeland of the Mirrali.","lead":"The Blooming Reach is associated with the Mirrali.","infobox":{"Associated race":"Mirrali","Type":"Racial homeland"},"sections":[{"heading":"Overview","text":"The Blooming Reach is the homeland of the Mirrali."},{"heading":"Geography","text":"Details to be established."},{"heading":"History","text":"Details to be established."}],"related":["racial-homelands","mirrali"]},
    {"slug":"forge-of-souls","title":"Forge of Souls","category":"World Forges","excerpt":"Greater Forge","lead":"The Forge of Souls is classified as a Greater Forge.","infobox":{"Classification":"Greater Forge"},"sections":[{"heading":"Overview","text":"The Forge of Souls is one of the four named forges."},{"heading":"History and purpose","text":"Details to be established."}],"related":["world-forges"]},
    {"slug":"forge-of-creation","title":"Forge of Creation","category":"World Forges","excerpt":"Greater Forge","lead":"The Forge of Creation is classified as a Greater Forge.","infobox":{"Classification":"Greater Forge"},"sections":[{"heading":"Overview","text":"The Forge of Creation is one of the four named forges."},{"heading":"History and purpose","text":"Details to be established."}],"related":["world-forges"]},
    {"slug":"forge-of-runes","title":"Forge of Runes","category":"World Forges","excerpt":"World Forge","lead":"The Forge of Runes is classified as a World Forge.","infobox":{"Classification":"World Forge"},"sections":[{"heading":"Overview","text":"The Forge of Runes is one of the four named forges."},{"heading":"History and purpose","text":"Details to be established."}],"related":["world-forges"]},
    {"slug":"forge-of-wills","title":"Forge of Wills","category":"World Forges","excerpt":"World Forge","lead":"The Forge of Wills is classified as a World Forge.","infobox":{"Classification":"World Forge"},"sections":[{"heading":"Overview","text":"The Forge of Wills is one of the four named forges."},{"heading":"History and purpose","text":"Details to be established."}],"related":["world-forges"]},
    {slug:'wisp-origins',title:'Wisp Origins',category:'Getting Started',excerpt:'The player’s earliest form and movement.',lead:'Early in the journey, the player begins as a hovering wisp, moving through the world much like any other playable character.',infobox:{Stage:'Early development',Movement:'Ground-relative hovering',Jumping:'Supported'},sections:[{heading:'Movement',text:'Wisps hover noticeably above the ground but do not have unrestricted flight. They can move, travel, and jump.'},{heading:'What comes next?',text:'Details of the opening journey and transformation progression are still being designed.'}],related:['new-player-guide','systems']},
    {slug:'closed-gates',title:'The Closed Gates',category:'Lore',excerpt:'The largest cities are not accessible to players at the beginning.',lead:'Beyond the places where the journey begins lie great cities whose gates remain closed to newcomers.',sections:[{heading:'Early access',text:'Players may glimpse the cities from outside, but entry is not currently part of the opening experience.'},{heading:'Future plans',text:'Opening these cities is a later development goal; any version estimate is tentative.'}],related:['civilizations','regions']},
    {slug:'patches',title:'Patches',category:'Community',excerpt:'Development versions, patch notes, and release history.',lead:'Browse game updates, development previews, and future releases. Everything currently shown is illustrative sample content.',sections:[{heading:'0.1 — Foundations of a New World',text:'Placeholder development milestone. This entry demonstrates how patch pages will look once real updates are ready.'},{heading:'How patch notes are maintained',text:'Add patch entries to the wiki content file, then publish changes through GitHub Pages. Dates and patch descriptions should be updated only when confirmed.'}],related:['about','contributing']},
    {slug:'new-player-guide',title:'New Player Guide',category:'Getting Started',excerpt:'An introduction to the earliest moments of the game.',lead:'Welcome, traveler. This page will eventually guide new players through their first moments in the world.',sections:[{heading:'Before you begin',text:'The opening experience is still under active development. No finalized tutorial steps have been announced.'},{heading:'Your first form',text:'The earliest movement prototype uses a hovering wisp that can still jump and travel like a grounded character.'}],related:['wisp-origins','races']},
    {slug:'civilizations',title:'Civilizations',category:'The World',excerpt:'The cultures and settlements shaping the world.',lead:'Civilizations bring together different peoples, with some settlements being more welcoming than others.',sections:[{heading:'Settlements',text:'Starting settlements and outlying communities will be accessible earlier than the major walled cities.'},{heading:'Major cities',text:'The largest cities are planned as places players can see before they can enter.'}],related:['races','closed-gates']},
    {slug:'about',title:'About the Wiki',category:'Community',excerpt:'An encyclopedia for the game and its players.',lead:'The World Codex is a custom, community-minded reference site built to grow alongside the game.',sections:[{heading:'Early development',text:'The wiki starts small: a homepage, an article system, search, categories, and patch tracking.'},{heading:'Who can edit?',text:'In this first static version, maintainers update articles through GitHub. Player accounts and in-browser editing are planned for a later backend-powered version.'}],related:['contributing','patches']},
    {slug:'contributing',title:'Wiki Guidelines',category:'Community',excerpt:'How the wiki can grow with the player community.',lead:'The long-term goal is a wiki that both its creator and players can maintain.',sections:[{heading:'For now',text:'Submit suggestions through the project repository or pass article corrections to a maintainer. This static version has no public editor or accounts.'},{heading:'Later',text:'A future backend can add user accounts, moderated edits, history, and approval queues. Unreleased spoilers and private design documents should never be stored in the public repository.'}],related:['about','patches']}
  ]
};
