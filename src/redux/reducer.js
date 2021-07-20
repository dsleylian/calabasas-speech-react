import { homePageData } from "../Data/homePageData";
import { aboutUsSettingData } from "../Data/aboutUsSettingsData";
import { meetTheTeamData } from "../Data/meetTheTeamData";
import { blogData } from "../Data/blogData";

export const reducer = (state = {homePageData: homePageData,
                                 aboutUsSettingData: aboutUsSettingData,
                                 meetTheTeamData: meetTheTeamData,
                                 blogData: blogData,
                                }, action) => {
    switch(action.Type){
        default:
            return state;
    }
}

