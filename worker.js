export default {
  async fetch(request) {
    const url = new URL(request.url);
    const filename = url.pathname.replace("/", "");
    
    // IPFS CID de la Filebase
    const cid = "QmaHzApJj67hH8Lov7rjZ9GUvzEMj1SaSPKVrqUYx8rFWB"; // înlocuiește cu al tău

    const ipfsUrl = `https://electoral-plum-wildebeest.myfilebase.com/ipfs/${cid}/${filename}`;

    const response = await fetch(ipfsUrl);
    return new Response(response.body, response);
  }
}
