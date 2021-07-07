export const request = async () => {
    const key = 'R9lwJInbD8Mv3NBM5Ip7JUhdchxGkubjju09B8Uy';
    const url = `https://api.nasa.gov/techtransfer/patent/?engine&api_key=${key}`;

    const request = await fetch(url);
    const response = await request.json();

    const result = response.results;

    return result;
}