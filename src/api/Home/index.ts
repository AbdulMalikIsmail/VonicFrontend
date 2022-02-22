// import request from "utils/request";


const dummytopics = [
    {
        topic_id: '1',
        title: "Topic 1",
        desc: "Title Desciption 1",
        subtopics: [
            {
                topic_id: '1',
                title: "Topic 1",
                desc: "Title Desciption 1",
                tags: "Games, Leadership, Verbal",
            },
            {
                topic_id: '1',
                title: "Topic 2",
                desc: "Title Desciption 1",
                tags: "Games, Leadership, Verbal",
            }
        ]
    },
    {
        topic_id: '2',
        title: "Topic 2",
        desc: "Title Desciption 2",
        subtopics: [
            {
                topic_id: '1',
                title: "Topic 1",
                desc: "Title Desciption 1",
                tags: "Games, Leadership, Verbal",
            },
            {
                topic_id: '1',
                title: "Topic 2",
                desc: "Title Desciption 1",
                tags: "Games, Leadership, Verbal",
            }
        ]
    },
    {
        topic_id: '21',
        title: "Topic 21",
        desc: "Title Desciption 21",
        subtopics: [
            {
                topic_id: '1',
                title: "Topic 1",
                desc: "Title Desciption 1",
                tags: "Games, Leadership, Verbal",
            },
            {
                topic_id: '1',
                title: "Topic 2",
                desc: "Title Desciption 1",
                tags: "Games, Leadership, Verbal",
            }
        ]
    },
    {
        topic_id: '22',
        title: "Topic 22",
        desc: "Title Desciption 21",
        subtopics: [
            {
                topic_id: '1',
                title: "Topic 1",
                desc: "Title Desciption 1",
                tags: "Games, Leadership, Verbal",
            },
            {
                topic_id: '1',
                title: "Topic 2",
                desc: "Title Desciption 1",
                tags: "Games, Leadership, Verbal",
            }
        ]
    }
]

export const getTopics = () => dummytopics
    // request(`/gettopics/`, {
    //     method: "GET",
    //     headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //     },
    // });

