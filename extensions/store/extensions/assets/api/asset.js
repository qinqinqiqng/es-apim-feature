/*
 *  Copyright (c) 2005-2014, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 *  WSO2 Inc. licenses this file to you under the Apache License,
 *  Version 2.0 (the "License"); you may not use this file except
 *  in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing,
 *  software distributed under the License is distributed on an
 *  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 *  KIND, either express or implied.  See the License for the
 *  specific language governing permissions and limitations
 *  under the License.
 *
 */

asset.configure = function(ctx){
    return{
        meta:{
            search:{
                searchableFields:['overview_provider','overview_name']
            }
        }
    }
};

asset.server = function(ctx) {
    return {
        endpoints: {
            pages: [{
                title: 'Prototyped APIs',
                url: 'prototyped_apis',
                path:'prototyped_apis.jag'
            },{
            	title: 'My Applications',
            	url:'my_applications',
            	path:'my_applications.jag'
            },{
            	title:'My Subscriptions',
            	url:'my_subscriptions',
            	path:'my_subscriptions.jag'
            },{
            	title:'Forum',
            	url:'forum',
            	path:'forum.jag'
            },{
            	title:'Statistics',
            	url:'statistics',
            	path:'statistics.jag'
            },{
            	title:'Tools',
            	url:'tools',
            	path:'tools.jag'
            }]
        }
    };
};

