URL=http://localhost:88/nanie/server/WS/BRIWS.php
FILE=./body.json
echo '{"class" : "experience", "requete" : "Creation", "args" : [ {"ExperienceId" : "ss"}, {"date": "date"}] }' > ./body.json
#echo '{"class" : "experience", "requete" : "Update", "args" : [ {"ExperienceId" : "ss"}, {"date": "date"}] }' > ./body.json
curl -H "Content-Type: application/json" -X POST --data @${FILE} ${URL} > ${FILE}.html
