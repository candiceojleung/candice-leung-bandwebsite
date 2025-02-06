export class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
  }

  async postComment(comments) {
    try {
      const url = `${this.baseUrl}/comments/?api_key=${this.apiKey}`;
      const response = await axios.post(url, comments);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async getComments() {
    try {
      const url = `${this.baseUrl}/comments/?api_key=${this.apiKey}`;
      const response = (await axios.get(url)).data.sort(
        (a, b) => b.timestamp - a.timestamp
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async getShows() {
    try {
      const url = `${this.baseUrl}/showdates/?api_key=${this.apiKey}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async likeComment() {
    try {
      const url = `${this.baseUrl}//comments/${comment.id}?api_key=${this.apiKey}`;
      const response = await axios.put(url, commentElement);
      return response;
    } catch (error) {
      console.log(error);
    }}

  async deleteComment() {
    try {
      const url = `${this.baseUrl}/comments/${comment.id}?api_key=${this.apiKey}`;
      const response = await axios.delete(url, commentElement);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
