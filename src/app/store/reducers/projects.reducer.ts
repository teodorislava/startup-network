import { Action } from '@ngrx/store';
import * as ProjectsActions from '../actions';
import { EntityState, createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import { Project } from 'src/app/models/Project';
import { Team } from 'src/app/models/Team';
import { User } from 'src/app/models/User';


export interface Projects extends EntityState<Project> {};
const adapter: EntityAdapter<Project> = createEntityAdapter<Project>();

const initialProjects: Projects = {
    ids:[],
    entities: {
    }
}

export interface ProjectsState
{
    loading:boolean,
    projects:Projects,
    projectsFail:boolean,
    postProjectFail: boolean,
    applyIndividualSuccess: boolean,
    applyIndividualFail:boolean,
    applyTeamSuccess:boolean,
    applyTeamFail:boolean,
    searchedProjects:Project[],
    searchedProjectsFail:boolean,
    addInvestment:Project,
    addInvestmentFail:boolean,
    approveTeamSuccess:Team,
    approveTeamFail:boolean,
    approveInidividualSuccess:User,
    approveInidiviualFail:boolean,
    projectsByTech:Project[],
    projectsByTechFail:boolean,
    hotProject:Project,
    hotProjectFail:boolean,
    getProjectInidividuals:User[],
    getProjectIndividualsFail:boolean,
    getProjectTeams:Team[],
    getProjectTeamsFail:boolean,
    denyTeamSuccess:boolean,
    denyTeamFail:boolean,
    denyUserSuccess:boolean,
    denyUserFail:boolean
}

const initialState: ProjectsState = {
    loading: true,
    projects: initialProjects,
    projectsFail:false,
    postProjectFail: false,
    applyIndividualSuccess: false,
    applyIndividualFail:false,
    applyTeamSuccess:false,
    applyTeamFail:false,
    searchedProjects:[],
    searchedProjectsFail:false,
    addInvestment: new Project,
    addInvestmentFail:false,
    approveTeamSuccess:new Team,
    approveTeamFail:false,
    approveInidividualSuccess: new User,
    approveInidiviualFail:false,
    projectsByTech:[],
    projectsByTechFail:false,
    hotProject:new Project,
    hotProjectFail:false,
    getProjectInidividuals:[],
    getProjectIndividualsFail:false,
    getProjectTeams:[],
    getProjectTeamsFail:false,
    denyTeamSuccess:false,
    denyTeamFail:false,
    denyUserSuccess:false,
    denyUserFail:false
}

export function projectsReducer(state:ProjectsState = initialState, action: Action)
{
    switch(action.type) {
        case ProjectsActions.POST_PROJECT_SUCCESS: {
            const {payload} = (action as ProjectsActions.PostProjectSuccess);
            const ad = adapter.addOne(payload, state.projects);
            return {...state, projects:ad, loading:false};
        }
        case ProjectsActions.POST_PROJECT_FAIL: {
            return {...state, postProjectFail: true, loading:false };
        }
        case ProjectsActions.APPLY_INDIVIDUAL_SUCCESS: {
            const {payload} = (action as ProjectsActions.ApplyIndividualSuccess);
            return {...state, applyIndividualSuccess:true, loading:false};
        }
        case ProjectsActions.APPLY_INDIVIDUAL_FAIL: {
            return {...state, applyIndividualFail: true, loading:false };
        }
        case ProjectsActions.APPLY_TEAM_SUCCESS: {
            const {payload} = (action as ProjectsActions.ApplyTeamSuccess);
            return {...state, applyTeamSuccess:true, loading:false};
        }
        case ProjectsActions.APPLY_TEAM_FAIL: {
            return {...state, applyTeamFail: true, loading:false };
        }
        case ProjectsActions.SEARCH_PROJECTS_SUCCESS: {
            const {payload} = (action as ProjectsActions.SearchProjectsSuccess);
            return {...state, searchedProjects:payload, loading:false};
        }
        case ProjectsActions.SEARCH_PROJECTS_FAIL: {
            return {...state, searchedProjectsFail: true, loading:false };
        }
        case ProjectsActions.ADD_INVESTMENT_SUCCESS: {
            const {payload} = (action as ProjectsActions.AddInvestmentSuccess);
            const projects = state.searchedProjects.map(p => p.id === payload.id ?
                    {...payload} : p
            );
            return {...state, searchedProjects:projects, loading:false };
        }
        case ProjectsActions.ADD_INVESTMENT_FAIL: {
            return {...state, addInvestmentFail: true, loading:false };
        }
        case ProjectsActions.APPROVE_APPLICATION_INDIVIDUAL_SUCCESS: {
            const {payload} = (action as ProjectsActions.ApproveApplicationInvididualSuccess);
            return {...state, approveInidividualSuccess:payload, loading:false };
        }
        case ProjectsActions.APPROVE_APPLICATION_INDIVIDUAL_FAIL: {
            return {...state, approveInidiviualFail: true, loading:false };
        }
        case ProjectsActions.DENY_USER_APPLICATION_SUCCESS: {
            const {payload} = (action as ProjectsActions.DenyUserApplicationSuccess);
            return {...state, denyUserSuccess:true, loading:false };
        }
        case ProjectsActions.DENY_USER_APPLICATION_FAIL: {
            return {...state, denyUserFail: true, loading:false };
        }
        case ProjectsActions.APPROVE_APPLICATION_TEAM_SUCCESS: {
            const {payload} = (action as ProjectsActions.ApproveApplicationTeamSuccess);
            return {...state, approveTeamSuccess:payload, loading:false };
        }
        case ProjectsActions.APPROVE_APPLICATION_TEAM_FAIL: {
            return {...state, approveTeamFail: true, loading:false };
        }
        case ProjectsActions.DENY_TEAM_APPLICATION_SUCCESS: {
            const {payload} = (action as ProjectsActions.DenyTeamApplicationSuccess);
            return {...state, denyTeamSuccess:true, loading:false };
        }
        case ProjectsActions.DENY_TEAM_APPLICATION_FAIL: {
            return {...state, denyTeamFail: true, loading:false };
        }
        case ProjectsActions.PROJECTS_BY_TECHNOLOGY_SUCCESS: {
            const {payload} = (action as ProjectsActions.ProjectsByTechnologySuccess);
            return {...state, projectsByTech:payload, loading:false };
        }
        case ProjectsActions.PROJECTS_BY_TECHNOLOGY_FAIL: {
            return {...state, projectsByTechFail: true, loading:false };
        }
        case ProjectsActions.HOT_PROJECT_SUCCESS: {
            const {payload} = (action as ProjectsActions.HotProjectSuccess);
            return {...state, hotProject:payload, loading:false };
        }
        case ProjectsActions.HOT_PROJECT_FAIL: {
            return {...state, hotProjectFail: true, loading:false };
        }
        case ProjectsActions.GET_PROJECT_INDIVIDUAL_SUCCESS: {
            const {payload} = (action as ProjectsActions.GetProjectIndividualSuccess);
            return {...state, getProjectInidividuals:payload, loading:false};
        }
        case ProjectsActions.GET_PROJECT_INDIVIDUAL_FAIL: {
            return {...state, getProjectIndividualsFail: true, loading:false };
        }
        case ProjectsActions.GET_PROJECT_TEAM_SUCCESS: {
            const {payload} = (action as ProjectsActions.GetProjectTeamSuccess);
            return {...state, getProjectTeams:payload, loading:false };
        }
        case ProjectsActions.GET_PROJECT_TEAM_FAIL: {
            return {...state, getProjectTeamsFail: true, loading:false };
        }
        case ProjectsActions.GET_USER_PROJECTS_SUCCESS: {
            const {payload} = (action as ProjectsActions.GetUserProjectsSuccess);
            const ad = adapter.addAll(payload, state.projects);
            return {...state, projects:ad, loading:false};
        }
        case ProjectsActions.GET_USER_PROJECTS_FAIL: {
            return {...state, projectsFail: true, loading:false };
        }
        case ProjectsActions.LOG_OUT: {
            return initialState;
        }
        default:
            return {...state, loading:true};
    }
}

export const selectors = adapter.getSelectors();