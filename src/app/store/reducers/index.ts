import { ActionReducerMap } from '@ngrx/store';
import { LoginState, loginReducer } from './login.reducers';
import { UserState, userReducer } from './users.reducer';
import { PostState, postsReducer } from './posts.reducer';
import { TeamsState, teamsReducer } from './teams.reducer';
import { TechnologiesState, technologiesReducer } from './technologies.reducer';
import { MessagesState, messagesReducer } from './messages.reducer';
import { ProjectsState, projectsReducer } from './projects.reducer';


export interface State {
    login: LoginState,
    users: UserState,
    posts: PostState,
    teams: TeamsState,
    technolgies: TechnologiesState,
    messages: MessagesState,
    projects: ProjectsState
}

export const RootReducer: ActionReducerMap<State> = {
    login: loginReducer,
    users: userReducer,
    posts: postsReducer,
    teams: teamsReducer, 
    technolgies: technologiesReducer,
    messages: messagesReducer,
    projects: projectsReducer
}