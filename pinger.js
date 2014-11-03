{\rtf1\ansi\ansicpg1252\cocoartf1265\cocoasubrtf210
{\fonttbl\f0\fnil\fcharset0 Consolas-Italic;\f1\fnil\fcharset0 Consolas;\f2\fnil\fcharset0 Consolas-Bold;
}
{\colortbl;\red255\green255\blue255;\red135\green136\blue117;\red246\green246\blue255;\red38\green38\blue38;
\red213\green58\blue6;\red128\green61\blue100;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720

\f0\i\fs24 \cf2 \cb3 \expnd0\expndtw0\kerning0
// import nodejs http module
\f1\i0 \cf4 \cb1 \expnd0\expndtw0\kerning0
\
\pard\pardeftab720

\f2\b \cf4 \cb3 \expnd0\expndtw0\kerning0
var
\f1\b0 \expnd0\expndtw0\kerning0
 http 
\f2\b \expnd0\expndtw0\kerning0
=
\f1\b0 \expnd0\expndtw0\kerning0
 require(\cf5 \expnd0\expndtw0\kerning0
'http'\cf4 \expnd0\expndtw0\kerning0
);\cb1 \expnd0\expndtw0\kerning0
\
\cb3 \expnd0\expndtw0\kerning0
\'a0\cb1 \expnd0\expndtw0\kerning0
\

\f2\b \cb3 \expnd0\expndtw0\kerning0
var
\f1\b0 \expnd0\expndtw0\kerning0
 host 
\f2\b \expnd0\expndtw0\kerning0
=
\f1\b0 \expnd0\expndtw0\kerning0
 process.argv[\cf6 \expnd0\expndtw0\kerning0
2\cf4 \expnd0\expndtw0\kerning0
] 
\f2\b \expnd0\expndtw0\kerning0
||
\f1\b0 \expnd0\expndtw0\kerning0
 \cf5 \expnd0\expndtw0\kerning0
'localhost'\cf4 \expnd0\expndtw0\kerning0
;\cb1 \expnd0\expndtw0\kerning0
\

\f2\b \cb3 \expnd0\expndtw0\kerning0
var
\f1\b0 \expnd0\expndtw0\kerning0
 userport 
\f2\b \expnd0\expndtw0\kerning0
=
\f1\b0 \expnd0\expndtw0\kerning0
 process.argv[\cf6 \expnd0\expndtw0\kerning0
3\cf4 \expnd0\expndtw0\kerning0
] 
\f2\b \expnd0\expndtw0\kerning0
||
\f1\b0 \expnd0\expndtw0\kerning0
 \cf6 \expnd0\expndtw0\kerning0
1337\cf4 \expnd0\expndtw0\kerning0
;\cb1 \expnd0\expndtw0\kerning0
\
\cb3 \expnd0\expndtw0\kerning0
\'a0\cb1 \expnd0\expndtw0\kerning0
\

\f2\b \cb3 \expnd0\expndtw0\kerning0
var
\f1\b0 \expnd0\expndtw0\kerning0
 ips 
\f2\b \expnd0\expndtw0\kerning0
=
\f1\b0 \expnd0\expndtw0\kerning0
 [\cf5 \expnd0\expndtw0\kerning0
'167.216.21.60'\cf4 \expnd0\expndtw0\kerning0
,\cf5 \expnd0\expndtw0\kerning0
'167.216.21.52'\cf4 \expnd0\expndtw0\kerning0
,\cf5 \expnd0\expndtw0\kerning0
'167.216.15.220'\cf4 \expnd0\expndtw0\kerning0
,\cf5 \expnd0\expndtw0\kerning0
'167.216.21.105'\cf4 \expnd0\expndtw0\kerning0
,\cf5 \expnd0\expndtw0\kerning0
'167.216.15.202'\cf4 \expnd0\expndtw0\kerning0
,\cf5 \expnd0\expndtw0\kerning0
'167.216.15.216'\cf4 \expnd0\expndtw0\kerning0
];\cb1 \expnd0\expndtw0\kerning0
\
\cb3 \expnd0\expndtw0\kerning0
\'a0\cb1 \expnd0\expndtw0\kerning0
\

\f2\b \cb3 \expnd0\expndtw0\kerning0
for
\f1\b0 \expnd0\expndtw0\kerning0
 (
\f2\b \expnd0\expndtw0\kerning0
var
\f1\b0 \expnd0\expndtw0\kerning0
 i 
\f2\b \expnd0\expndtw0\kerning0
=
\f1\b0 \expnd0\expndtw0\kerning0
 \cf6 \expnd0\expndtw0\kerning0
0\cf4 \expnd0\expndtw0\kerning0
; i 
\f2\b \expnd0\expndtw0\kerning0
<
\f1\b0 \expnd0\expndtw0\kerning0
 ips.length; i
\f2\b \expnd0\expndtw0\kerning0
++
\f1\b0 \expnd0\expndtw0\kerning0
) \{\cb1 \expnd0\expndtw0\kerning0
\
\cb3 \expnd0\expndtw0\kerning0
  ping(ips[i]);\cb1 \expnd0\expndtw0\kerning0
\
\cb3 \expnd0\expndtw0\kerning0
\};\cb1 \expnd0\expndtw0\kerning0
\
\cb3 \expnd0\expndtw0\kerning0
\'a0\cb1 \expnd0\expndtw0\kerning0
\

\f2\b \cb3 \expnd0\expndtw0\kerning0
function
\f1\b0 \expnd0\expndtw0\kerning0
 ping (ip) \{\cb1 \expnd0\expndtw0\kerning0
\
\cb3 \expnd0\expndtw0\kerning0
  \cb1 \expnd0\expndtw0\kerning0
\
\cb3 \expnd0\expndtw0\kerning0
  
\f2\b \expnd0\expndtw0\kerning0
var
\f1\b0 \expnd0\expndtw0\kerning0
 options 
\f2\b \expnd0\expndtw0\kerning0
=
\f1\b0 \expnd0\expndtw0\kerning0
 \{ hostname 
\f2\b \expnd0\expndtw0\kerning0
:
\f1\b0 \expnd0\expndtw0\kerning0
 ip, port 
\f2\b \expnd0\expndtw0\kerning0
:
\f1\b0 \expnd0\expndtw0\kerning0
 userport \};\cb1 \expnd0\expndtw0\kerning0
\
\cb3 \expnd0\expndtw0\kerning0
  
\f2\b \expnd0\expndtw0\kerning0
var
\f1\b0 \expnd0\expndtw0\kerning0
 message 
\f2\b \expnd0\expndtw0\kerning0
=
\f1\b0 \expnd0\expndtw0\kerning0
 \cf5 \expnd0\expndtw0\kerning0
""\cf4 \expnd0\expndtw0\kerning0
;\cb1 \expnd0\expndtw0\kerning0
\
\cb3 \expnd0\expndtw0\kerning0
  
\f2\b \expnd0\expndtw0\kerning0
var
\f1\b0 \expnd0\expndtw0\kerning0
 req 
\f2\b \expnd0\expndtw0\kerning0
=
\f1\b0 \expnd0\expndtw0\kerning0
 http.request(options, 
\f2\b \expnd0\expndtw0\kerning0
function
\f1\b0 \expnd0\expndtw0\kerning0
 (res) \{\cb1 \expnd0\expndtw0\kerning0
\
\cb3 \expnd0\expndtw0\kerning0
    \cb1 \expnd0\expndtw0\kerning0
\
\cb3 \expnd0\expndtw0\kerning0
    
\f0\i \cf2 \expnd0\expndtw0\kerning0
// our response data is encoded in utf8
\f1\i0 \cf4 \cb1 \expnd0\expndtw0\kerning0
\
\cb3 \expnd0\expndtw0\kerning0
    res.setEncoding(\cf5 \expnd0\expndtw0\kerning0
'utf8'\cf4 \expnd0\expndtw0\kerning0
);\cb1 \expnd0\expndtw0\kerning0
\
\cb3 \expnd0\expndtw0\kerning0
\'a0\cb1 \expnd0\expndtw0\kerning0
\
\cb3 \expnd0\expndtw0\kerning0
    res.on(\cf5 \expnd0\expndtw0\kerning0
'data'\cf4 \expnd0\expndtw0\kerning0
, 
\f2\b \expnd0\expndtw0\kerning0
function
\f1\b0 \expnd0\expndtw0\kerning0
 (chunk) \{\cb1 \expnd0\expndtw0\kerning0
\
\cb3 \expnd0\expndtw0\kerning0
      message 
\f2\b \expnd0\expndtw0\kerning0
+=
\f1\b0 \expnd0\expndtw0\kerning0
 chunk;\cb1 \expnd0\expndtw0\kerning0
\
\cb3 \expnd0\expndtw0\kerning0
    \});\cb1 \expnd0\expndtw0\kerning0
\
\cb3 \expnd0\expndtw0\kerning0
\'a0\cb1 \expnd0\expndtw0\kerning0
\
\cb3 \expnd0\expndtw0\kerning0
    res.on(\cf5 \expnd0\expndtw0\kerning0
'end'\cf4 \expnd0\expndtw0\kerning0
, 
\f2\b \expnd0\expndtw0\kerning0
function
\f1\b0 \expnd0\expndtw0\kerning0
 () \{\cb1 \expnd0\expndtw0\kerning0
\
\cb3 \expnd0\expndtw0\kerning0
      \cb1 \expnd0\expndtw0\kerning0
\
\cb3 \expnd0\expndtw0\kerning0
      
\f2\b \expnd0\expndtw0\kerning0
var
\f1\b0 \expnd0\expndtw0\kerning0
 json_message 
\f2\b \expnd0\expndtw0\kerning0
=
\f1\b0 \expnd0\expndtw0\kerning0
 JSON.parse(message);\cb1 \expnd0\expndtw0\kerning0
\
\cb3 \expnd0\expndtw0\kerning0
\'a0\cb1 \expnd0\expndtw0\kerning0
\
\cb3 \expnd0\expndtw0\kerning0
      console.log( json_message );\cb1 \expnd0\expndtw0\kerning0
\
\cb3 \expnd0\expndtw0\kerning0
\'a0\cb1 \expnd0\expndtw0\kerning0
\
\cb3 \expnd0\expndtw0\kerning0
    \});\cb1 \expnd0\expndtw0\kerning0
\
\cb3 \expnd0\expndtw0\kerning0
\'a0\cb1 \expnd0\expndtw0\kerning0
\
\cb3 \expnd0\expndtw0\kerning0
  \});\cb1 \expnd0\expndtw0\kerning0
\
\cb3 \expnd0\expndtw0\kerning0
\'a0\cb1 \expnd0\expndtw0\kerning0
\
\cb3 \expnd0\expndtw0\kerning0
  req.on(\cf5 \expnd0\expndtw0\kerning0
'error'\cf4 \expnd0\expndtw0\kerning0
, 
\f2\b \expnd0\expndtw0\kerning0
function
\f1\b0 \expnd0\expndtw0\kerning0
(e) \{\cb1 \expnd0\expndtw0\kerning0
\
\cb3 \expnd0\expndtw0\kerning0
    console.log(\cf5 \expnd0\expndtw0\kerning0
'problem with request: '\cf4 \expnd0\expndtw0\kerning0
 
\f2\b \expnd0\expndtw0\kerning0
+
\f1\b0 \expnd0\expndtw0\kerning0
 e.message);\cb1 \expnd0\expndtw0\kerning0
\
\cb3 \expnd0\expndtw0\kerning0
  \});\cb1 \expnd0\expndtw0\kerning0
\
\cb3 \expnd0\expndtw0\kerning0
\'a0\cb1 \expnd0\expndtw0\kerning0
\
\cb3 \expnd0\expndtw0\kerning0
  req.end();\cb1 \expnd0\expndtw0\kerning0
\
\cb3 \expnd0\expndtw0\kerning0
\'a0\cb1 \expnd0\expndtw0\kerning0
\
\cb3 \expnd0\expndtw0\kerning0
\}}