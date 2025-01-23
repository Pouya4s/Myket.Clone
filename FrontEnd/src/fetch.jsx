let siteAddress = "https://localhost:7075/";

async function getJSON(address)
{
    const response = await fetch(siteAddress + address);
    const result = await response.json();
    return result;
}
async function postJSON(address,data, method = "POST") 
{
    await fetch(siteAddress + address, 
    {
        method: method,
        headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    });
}
async function postJSONWithReturn(address,data, method = "POST") 
{
    let response = await fetch(siteAddress + address, 
    {
        method: method,
        headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    });
    let json = await response.json();
    return json
}
async function deleteJSON(address)
{
    await fetch(siteAddress + address, {method: 'DELETE'});
}
export const postJson = postJSON;
export const getJson = getJSON;
export const deleteJson = deleteJSON;
export const postJsonWithReturn = postJSONWithReturn;