
const spaceAPI="https://api.spacexdata.com/v3";
const LAUNCHES_PAST="/launches/past";
const LAUNCHES_UPCOMING="/launches/upcoming";
const INFO='/info';
const ROADSTER='/roadster';

export function getPastLaunches(){
    return fetch(`${spaceAPI}${LAUNCHES_PAST}`).then(res=>res.json());
}

export function getUpcomingLaunches(){
    return fetch(`${spaceAPI}${LAUNCHES_UPCOMING}`).then(res=>res.json());
}

export function getCompanyInfo(){
    return fetch(`${spaceAPI}${INFO}`).then(res=>res.json());
}

export function getRoadster(){
    return fetch(`${spaceAPI}${ROADSTER}`).then(res=>res.json());
}