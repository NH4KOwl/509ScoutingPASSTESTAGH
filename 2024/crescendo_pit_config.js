var config_data = `
{
  "title": "Scouting PASS 2024",
  "page_title": "Crescendo",
  "pitConfig": "true",
  "prematch": [
    {"name": "Scouter Initials", 
      "code": "s",
      "type": "text"
      },
    { "name": "gregr Number",
      "code": "t",
      "type": "number"
    },
    { "name": "Width",
      "code": "wid",
      "type": "number",
      "defaultValue": "0"
    },
    {"name": "Length", 
     "code": "l", 
     "type": "number", 
     "defaultValue": "0"
    },
    { "name": "Weight",
      "code": "wei",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "w": "West Coast/Tank<br>",
        "b": "Butterfly/Grashopper<br>",
        "m": "Mechanum<br>",
        "o": "Other"
      },
      "defaultValue": "o"
    },
    { "name": "Other Drivetrain",
      "code": "odt",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    {"name": "Pass under stage?", 
     "code": "sta", 
     "type": "bool"
    },
    {"name": "April tag alignment?",
     "code": "apr", 
     "type": "bool"
    },
    {"name": "Can score: ", 
     "code": "sco", 
     "type": "radio",
     "choices": {
        "n": "Amp<br>", 
        "f": "Speaker<br>", 
        "c": "Both<br>", 
        "k": "Not Scouted"
     },
     "defaultValue": "k"
    },
    {"name": "Can climb/Trap score: ", 
      "code": "cli", 
      "type": "radio",
      "choices": {
        "n": "Climb<br>", 
        "f": "Score Trap<br>", 
        "c": "Both<br>", 
        "b": "Neither<br>",
        "k": "Not Scouted"
      },
      "defaultValue": "k"
    },
    { "name": "Floor pickup Notes",
      "code": "fcn",
      "type": "bool"
    },
    { "name": "# of Auto Notes",
      "code": "aun",
      "type": "counter"
    },
    { "name": "Autos Descriptions",
      "code": "aut",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    {
      "name": "Extra Info",
      "code": "ei",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    {
      "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 20,
      "maxSize": 300
    }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;
//documentation 
