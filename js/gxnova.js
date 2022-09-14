var body = $response.body;
var hack = /"state":\d/g;
body = body.replace(hack,'"state":2');
$done({
    body
});