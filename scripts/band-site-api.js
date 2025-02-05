class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
  }

  async postComment(comments) {
    const url = `${this.baseUrl}/comments/?api_key=${this.apiKey}`;
    const response = await axios.post(url, comments);
    return response;
  }

  async getComments() {
    const url = `${this.baseUrl}/comments/?api_key=${this.apiKey}`;
    const response = (await axios.get(url)).data.sort((a,b)=>a.timestamp-b.timestamp);
    return response;
  }

  async getShows() {
    const url = `${this.baseUrl}/showdates/?api_key=${this.apiKey}`;
    const response = await axios.get(url);
    return response.data;
  }

  
  async deleteProduct(commentID) {
    const url=`${this.baseUrl}/comments/${commentID}?api_key=${this.apiKey}`;
     const response = await axios.delete(url, commentID);
     return response;
}
}
