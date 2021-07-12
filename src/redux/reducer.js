import { homePageData } from "../Data/homePageData";
import { aboutUsSettingData } from "../Data/aboutUsSettingsData";

export const reducer = (state = {homePageData: homePageData,
                                 aboutUsSettingData: aboutUsSettingData,
                                }, action) => {
    switch(action.Type){
        default:
            return state;
    }
}

