import { Action } from '@ngrx/store';

//models

import { LoginResponse } from '../models/Login';
import { User } from '../models/User';
import { Post } from '../models/Post';
import { Comment } from '../models/Comment';
import { Team } from '../models/Team';
import { Technology } from '../models/Technology';
import { Message } from '../models/Message';
import { Project } from '../models/Project';
import { Mention } from '../models/Mention';
import { Notify } from '../models/Notify';


//action types

export const LOGIN = "Login";
export const LOGIN_SUCCESS = "Login success";
export const LOGIN_FAIL = "Login fail";
export const GET_DETAILS = "Get details";
export const GET_DETAILS_SUCCESS = "Get details success";
export const GET_DETAILS_FAIL = "Get details fail";
export const GET_FRIENDS_POSTS = "Get friends friends";
export const GET_FRIENDS_POSTS_SUCCESS = "Get friends posts success";
export const GET_FRIENDS_POSTS_FAIL = "Get friends posts fail";
export const POST_POST = "Post post";
export const POST_POST_SUCCESS = "Post post success";
export const POST_POST_FAIL = "Post post fail";
export const GET_POST_COMMENTS = "Get post commenst";
export const GET_POST_COMMENTS_SUCCESS = "Get post comments success";
export const GET_POST_COMMENTS_FAIL = "Get post comments fail";
export const POST_COMMENT = "Post comment";
export const POST_COMMENT_SUCCESS = "Post comment success";
export const POST_COMMENT_FAIL = "Post comment fail";
export const BRAIN_POST = "Brain post";
export const BRAIN_POST_SUCCESS = "Brain post success";
export const BRAIN_POST_FAIL = "Brain post fail";
export const CREATE_TEAM = "Create team";
export const CREATE_TEAM_SUCCESS = "Create team success";
export const CREATE_TEAM_FAIL = "Create team fail";
export const ADD_TEAM_MEMBER = "Add team member";
export const ADD_TEAM_MEMBER_SUCCESS = "Add team member success";
export const ADD_TEAM_MEMBER_FAIL = "Add team member fail";
export const REMOVE_TEAM_MEMBER = "Remove team member";
export const REMOVE_TEAM_MEMBER_SUCCESS = "Remove team member success";
export const REMOVE_TEAM_MEMBER_FAIL = "Remove team member fail";
export const GET_USER_TEAMS = "Get user teams";
export const GET_USER_TEAMS_SUCCESS = "Get user teams success";
export const GET_USER_TEAMS_FAIL = "Get user teams fail";
export const SEARCH_USERS = "Search users";
export const SEARCH_USERS_SUCCESS = "Search users success";
export const SEARCH_USERS_FAIL = "Search users fail";
export const FOLLOW_USER = "Follow user";
export const FOLLOW_USER_SUCCESS = "Follow user success";
export const FOLLOW_USER_FAIL = "Follow user fail";
export const GET_RECOMMENDED_TECH = "Get recommended tech";
export const GET_RECOMMENDED_TECH_SUCCESS = "Get recommended tech success";
export const GET_RECOMMENDED_TECH_FAIL = "Get recommended tech fail";
export const POST_TECH = "Post tech";
export const POST_TECH_SUCCESS = "Post tech success";
export const POST_TECH_FAIL = "Post tech fail";
export const GET_USER_TECHS = "Get user techs";
export const GET_USER_TECHS_SUCCESS = "Get user techs success";
export const GET_USER_TECHS_FAIL = "Get user techs fail";
export const GET_RECOMMENDED_FRIENDS = "Get recommended friends";
export const GET_RECOMMENDED_FRIENDS_SUCCESS = "Get recommended friends success";
export const GET_RECOMMENDED_FRIENDS_FAIL = "Get recommended friends fail";
export const GET_TEAM_MEMBERS = "Get team members";
export const GET_TEAM_MEMBERS_SUCCESS = "Get team members success";
export const GET_TEAM_MEMBERS_FAIL = "Get team members fail";
export const REGISTER_USER = "Register user";
export const REGISTER_USER_SUCCESS = "Register user success";
export const REGISTER_USER_FAIL = "Register user fail";
export const GET_ALL_TECHS = "Get all techs";
export const GET_ALL_TECHS_SUCCESS = "Get all techs success";
export const GET_ALL_TECHS_FAIL = "Get all techs fail";
export const POST_USER_TECH = "Post user tech";
export const POST_USER_TECH_SUCCESS = "Post user tech success";
export const POST_USER_TECH_FAIL = "Post user tech fail";
export const CLEAR_INFO = "Clear info";
export const POST_MESSAGE = "Post message";
export const POST_MESSAGE_SUCCESS = "Post message success";
export const POST_MESSAGE_FAIL = "Post message fail";
export const GET_MESSAGES = "Get messages";
export const GET_MESSAGES_SUCCESS = "Get messages success";
export const GET_MESSAGES_FAIL = "Get messages fail";
export const RECEIVE_MESSAGE = "Receive message";
export const POST_PROJECT = "Post project";
export const POST_PROJECT_SUCCESS = "Post project success";
export const POST_PROJECT_FAIL = "Post project fail";
export const APPLY_INDIVIDUAL = "Apply individual";
export const APPLY_INDIVIDUAL_SUCCESS = "Apply individual success";
export const APPLY_INDIVIDUAL_FAIL = "Apply individual fail";
export const APPLY_TEAM = "Apply team";
export const APPLY_TEAM_SUCCESS = "Apply team success";
export const APPLY_TEAM_FAIL = "Apply team fail";
export const SEARCH_PROJECTS = "Search projects";
export const SEARCH_PROJECTS_SUCCESS = "Search projects success";
export const SEARCH_PROJECTS_FAIL = "Search projects fail";
export const ADD_INVESTMENT = "Add investment";
export const ADD_INVESTMENT_SUCCESS = "Add investment success";
export const ADD_INVESTMENT_FAIL = "Add investment fail";
export const APPROVE_APPLICATION_INDIVIDUAL = "Approve application individual";
export const APPROVE_APPLICATION_INDIVIDUAL_SUCCESS = "Approve application individual success";
export const APPROVE_APPLICATION_INDIVIDUAL_FAIL = "Approve application individual fail";
export const APPROVE_APPLICATION_TEAM = "Approve application team";
export const APPROVE_APPLICATION_TEAM_SUCCESS = "Approve application team success";
export const APPROVE_APPLICATION_TEAM_FAIL = "Approve application team fail";
export const PROJECTS_BY_TECHNOLOGY = "Projects by technology";
export const PROJECTS_BY_TECHNOLOGY_SUCCESS = "Projects by technology success";
export const PROJECTS_BY_TECHNOLOGY_FAIL = "Projects by technology fail";
export const HOT_PROJECT = "Hot project";
export const HOT_PROJECT_SUCCESS = "Hot project success";
export const HOT_PROJECT_FAIL = "Hot project fail";
export const GET_PROJECT_INDIVIDUAL = "Get project individual";
export const GET_PROJECT_INDIVIDUAL_SUCCESS = "Get project individual success";
export const GET_PROJECT_INDIVIDUAL_FAIL = "Get project individual fail";
export const GET_PROJECT_TEAM = "Get project team";
export const GET_PROJECT_TEAM_SUCCESS = "Get project team success";
export const GET_PROJECT_TEAM_FAIL = "Get project team fail";
export const GET_USER_MENTIONS = "Get user mentions";
export const GET_USER_MENTIONS_SUCCESS = "Get user mentions success";
export const GET_USER_MENTIONS_FAIL = "Get user mentions fail";
export const GET_USER_NOTIFICATIONS = "Get user notifications";
export const GET_USER_NOTIFICATIONS_SUCCESS = "Get user notifications success";
export const GET_USER_NOTIFICATIONS_FAIL = "Get user notifications fail";
export const EDIT_USER = "Edit user";
export const EDIT_USER_SUCCESS = "Edit user success";
export const EDIT_USER_FAIL = "Edit user fail";
export const GET_USER_PROJECTS = "Get user projects";
export const GET_USER_PROJECTS_SUCCESS = "Get user projects success";
export const GET_USER_PROJECTS_FAIL = "Get user projects fail";
export const DENY_USER_APPLICATION = "Deny user application";
export const DENY_USER_APPLICATION_SUCCESS = "Deny user application success";
export const DENY_USER_APPLICATION_FAIL = "Deny user application fail";
export const DENY_TEAM_APPLICATION = "Deny team application";
export const DENY_TEAM_APPLICATION_SUCCESS = "Deny team application success";
export const DENY_TEAM_APPLICATION_FAIL = "Deny team application fail";
export const LOG_OUT = "Log out";

//actions

export class TryLogin implements Action
{
    type = LOGIN;
    constructor(public payload) {}
}

export class LoginSuccess implements Action
{
    type = LOGIN_SUCCESS;
    constructor(public payload:LoginResponse) {}
}

export class LoginFail implements Action
{
    type = LOGIN_FAIL;
    constructor(public payload:string) {}
}

export class GetDetails implements Action 
{
    type = GET_DETAILS;
    constructor(public payload) {}
}

export class GetDetailsSuccess implements Action
{
    type = GET_DETAILS_SUCCESS;
    constructor(public payload: User) {}
}

export class GetDetailFail implements Action 
{
    type = GET_DETAILS_FAIL;
    constructor(public payload: string) {}
}

export class GetFriendsPosts implements Action 
{
    type = GET_FRIENDS_POSTS;
    constructor(public payload) {}
}

export class GetFriendsPostsSuccess implements Action
{
    type = GET_FRIENDS_POSTS_SUCCESS;
    constructor(public payload: Post[]) {}
}

export class GetFriendsPostsFail implements Action 
{
    type = GET_FRIENDS_POSTS_FAIL;
    constructor(public payload: string) {}
}

export class PostPost implements Action 
{
    type = POST_POST;
    constructor(public payload) {}
}

export class PostPostSuccess implements Action
{
    type = POST_POST_SUCCESS;
    constructor(public payload:Post) {}
}

export class PostPostFail implements Action
{
    type = POST_POST_FAIL;
    constructor(public payload: string) {}
}

export class GetPostComments implements Action 
{
    type = GET_POST_COMMENTS;
    constructor(public payload) {}
}

export class GetPostCommentsSuccess implements Action
{
    type = GET_POST_COMMENTS_SUCCESS;
    constructor(public payload:Comment[]) {}
}

export class GetPostCommentsFail implements Action
{
    type = GET_POST_COMMENTS_FAIL;
    constructor(public payload: string) {}
}

export class ClearInfo implements Action
{
    type = CLEAR_INFO;
}

export class PostComment implements Action 
{
    type = POST_COMMENT;
    constructor(public payload) {}
}

export class PostCommentSuccess implements Action
{
    type = POST_COMMENT_SUCCESS;
    constructor(public payload:Comment) {}
}

export class PostCommentFail implements Action
{
    type = POST_COMMENT_FAIL;
    constructor(public payload: string) {}
}

export class BrainPost implements Action
{
    type = BRAIN_POST;
    constructor(public payload) {} 
}

export class BrainPostSuccess implements Action 
{
    type = BRAIN_POST_SUCCESS;
    constructor(public payload: Post) {}
}

export class BrainPostFail implements Action
{
    type = BRAIN_POST_FAIL;
    constructor(public payload :string) {}
}

export class CreateTeam implements Action 
{
    type = CREATE_TEAM;
    constructor(public payload) {}
}

export class CreateTeamSuccess implements Action 
{
    type = CREATE_TEAM_SUCCESS;
    constructor(public payload:Team) {}
}

export class CreateTeamFail implements Action 
{
    type = CREATE_TEAM_FAIL;
    constructor(public payload:string) {}
}

export class AddTeamMember implements Action
{
    type = ADD_TEAM_MEMBER;
    constructor(public payload) {}
}

export class AddTeamMemberSuccess implements Action
{
    type = ADD_TEAM_MEMBER_SUCCESS;
    constructor(public payload:boolean) {}
}

export class AddTeamMemberFail implements Action
{
    type = ADD_TEAM_MEMBER_FAIL;
    constructor(public payload:string) {}
}

export class RemoveTeamMember implements Action
{
    type = REMOVE_TEAM_MEMBER;
    constructor(public payload) {}
}

export class RemoveTeamMemberSuccess implements Action
{
    type = REMOVE_TEAM_MEMBER_SUCCESS;
    constructor(public payload:boolean) {}
}

export class RemoveTeamMemberFail implements Action
{
    type = REMOVE_TEAM_MEMBER_FAIL;
    constructor(public payload:string) {}
}

export class GetUserTeams implements Action
{
    type = GET_USER_TEAMS;
    constructor(public payload) {}
}

export class GetUserTeamsSuccess implements Action
{
    type = GET_USER_TEAMS_SUCCESS;
    constructor(public payload:Team[]) {}
}

export class GetUserTeamsFail implements Action
{
    type = GET_USER_TEAMS_FAIL;
    constructor(public payload:string) {}
}

export class SearchUsers implements Action 
{
    type = SEARCH_USERS;
    constructor(public payload) {}
}

export class SearchUsersSuccess implements Action 
{
    type = SEARCH_USERS_SUCCESS;
    constructor(public payload:User[]) {}
}

export class SearchUsersFail implements Action 
{
    type = SEARCH_USERS_FAIL;
    constructor(public payload:string) {}
}

export class FollowUser implements Action
{
    type = FOLLOW_USER;
    constructor(public payload) {}
}

export class FollowUserSuccess implements Action
{
    type = FOLLOW_USER_SUCCESS;
    constructor(public payload:boolean) {}
}

export class FollowUserFail implements Action
{
    type = FOLLOW_USER_FAIL;
    constructor(public payload:string) {}
}

export class PostTech implements Action
{
    type = POST_TECH;
    constructor(public payload) {}
}

export class PostTechSuccess implements Action
{
    type = POST_TECH_SUCCESS;
    constructor(public payload:Technology) {}
}

export class PostTechFail implements Action
{
    type = POST_TECH_FAIL;
    constructor(public payload:string) {}
}

export class GetUserTechs implements Action
{
    type = GET_USER_TECHS;
    constructor(public payload) {}
}

export class GetUserTechsSuccess implements Action
{
    type = GET_USER_TECHS_SUCCESS;
    constructor(public payload:Technology[]) {}
}

export class GetUserTechsFail implements Action
{
    type = GET_USER_TECHS_FAIL;
    constructor(public payload:string) {}
}

export class GetReccomendedFriends implements Action
{
    type = GET_RECOMMENDED_FRIENDS;
    constructor(public payload) {}
}

export class GetReccomendedFriendsSuccess implements Action
{
    type = GET_RECOMMENDED_FRIENDS_SUCCESS;
    constructor(public payload:Post[]) {}
}

export class GetReccomendedFriendsFail implements Action
{
    type = GET_RECOMMENDED_FRIENDS_FAIL;
    constructor(public payload:string) {}
}

export class GetReccomendedTech implements Action
{
    type = GET_RECOMMENDED_TECH;
    constructor(public payload) {}
}

export class GetReccomendedTechSuccess implements Action
{
    type = GET_RECOMMENDED_TECH_SUCCESS;
    constructor(public payload:Post[]) {}
}

export class GetReccomendedTechFail implements Action
{
    type = GET_RECOMMENDED_TECH_FAIL;
    constructor(public payload:string) {}
}

export class GetTeamMembers implements Action 
{
    type = GET_TEAM_MEMBERS;
    constructor(public payload) {}
}

export class GetTeamMembersSuccess implements Action 
{
    type = GET_TEAM_MEMBERS_SUCCESS;
    constructor(public payload:User[]) {}
}

export class GetTeamMembersFail implements Action 
{
    type = GET_TEAM_MEMBERS_FAIL;
    constructor(public payload:string) {}
}

export class RegisterUser implements Action
{
    type = REGISTER_USER;
    constructor(public payload) {}
}

export class RegisterUserSuccess implements Action
{
    type = REGISTER_USER_SUCCESS;
    constructor(public payload:boolean) {}
}

export class RegisterUserFail implements Action
{
    type = REGISTER_USER_FAIL;
    constructor(public payload:string) {}
}

export class GetAllTechs implements Action 
{
    type = GET_ALL_TECHS;
    constructor(public payload) {}
}

export class GetAllTechsSuccess implements Action 
{
    type = GET_ALL_TECHS_SUCCESS;
    constructor(public payload:Technology[]) {}
}

export class GetAllTechsFail implements Action 
{
    type = GET_ALL_TECHS_FAIL;
    constructor(public payload:string) {}
}

export class PostUserTech implements Action 
{
    type = POST_USER_TECH;
    constructor(public payload) {}
}

export class PostUserTechSuccess implements Action 
{
    type = POST_USER_TECH_SUCCESS;
    constructor(public payload:Technology) {}
}

export class PostUserTechFail implements Action 
{
    type = POST_USER_TECH_FAIL;
    constructor(public payload:string) {}
}

export class PostMessage implements Action
{
    type = POST_MESSAGE;
    constructor(public payload) {}
}

export class PostMessageSuccess implements Action
{
    type = POST_MESSAGE_SUCCESS;
    constructor(public payload:Message) {}
}

export class PostMessageFail implements Action
{
    type = POST_MESSAGE_FAIL;
    constructor(public payload:string) {}
}

export class GetMessages implements Action
{
    type = GET_MESSAGES;
    constructor(public payload) {}
}

export class GetMessagesSuccess implements Action
{
    type = GET_MESSAGES_SUCCESS;
    constructor(public payload:Message[]) {}
}

export class GetMessagesFail implements Action
{
    type = GET_MESSAGES_FAIL;
    constructor(public payload:string) {}
}

export class ReceiveMessage implements Action 
{
    type = RECEIVE_MESSAGE;
    constructor(public payload:Message) {}
}

export class PostProject implements Action
{
    type = POST_PROJECT;
    constructor(public payload) {}
}

export class PostProjectSuccess implements Action
{
    type = POST_PROJECT_SUCCESS;
    constructor(public payload:Project) {}
}

export class PostProjectFail implements Action
{
    type = POST_PROJECT_FAIL;
    constructor(public payload:string) {}
}

export class ApplyIndividual implements Action
{
    type = APPLY_INDIVIDUAL;
    constructor(public payload) {}
}

export class ApplyIndividualSuccess implements Action
{
    type = APPLY_INDIVIDUAL_SUCCESS;
    constructor(public payload:boolean) {}
}

export class ApplyIndividualFail implements Action
{
    type = APPLY_INDIVIDUAL_FAIL;
    constructor(public payload:string) {}
}

export class ApplyTeam implements Action
{
    type = APPLY_TEAM;
    constructor(public payload) {}
}

export class ApplyTeamSuccess implements Action
{
    type = APPLY_TEAM_SUCCESS;
    constructor(public payload:boolean) {}
}

export class ApplyTeamFail implements Action
{
    type = APPLY_TEAM_FAIL;
    constructor(public payload:string) {}
}

export class SearchProjects implements Action
{
    type = SEARCH_PROJECTS;
    constructor(public payload) {}
}

export class SearchProjectsSuccess implements Action
{
    type = SEARCH_PROJECTS_SUCCESS;
    constructor(public payload:Project[]) {}
}

export class SearchProjectsFail implements Action
{
    type = SEARCH_PROJECTS_FAIL;
    constructor(public payload:string) {}
}

export class AddInvestment implements Action
{
    type = ADD_INVESTMENT;
    constructor(public payload) {}
}

export class AddInvestmentSuccess implements Action
{
    type = ADD_INVESTMENT_SUCCESS;
    constructor(public payload:Project) {}
}

export class AddInvestmentFail implements Action
{
    type = ADD_INVESTMENT_FAIL;
    constructor(public payload:string) {}
}

export class ApproveApplicationInvididual implements Action
{
    type = APPROVE_APPLICATION_INDIVIDUAL;
    constructor(public payload) {}
}

export class ApproveApplicationInvididualSuccess implements Action
{
    type = APPROVE_APPLICATION_INDIVIDUAL_SUCCESS;
    constructor(public payload:User) {}
}

export class ApproveApplicationInvididualFail implements Action
{
    type = APPROVE_APPLICATION_INDIVIDUAL_FAIL;
    constructor(public payload) {}
}

export class ApproveApplicationTeam implements Action
{
    type = APPROVE_APPLICATION_TEAM;
    constructor(public payload) {}
}

export class ApproveApplicationTeamSuccess implements Action
{
    type = APPROVE_APPLICATION_TEAM_SUCCESS;
    constructor(public payload:Team) {}
}

export class ApproveApplicationTeamFail implements Action
{
    type = APPROVE_APPLICATION_TEAM_FAIL;
    constructor(public payload:string) {}
}

export class HotProject implements Action
{
    type = HOT_PROJECT;
    constructor(public payload) {}
}

export class HotProjectSuccess implements Action
{
    type = HOT_PROJECT_SUCCESS;
    constructor(public payload:Project) {}
}

export class HotProjectFail implements Action
{
    type = HOT_PROJECT_FAIL;
    constructor(public payload:string) {}
}

export class ProjectsByTechnology implements Action
{
    type = PROJECTS_BY_TECHNOLOGY;
    constructor(public payload) {}
}

export class ProjectsByTechnologySuccess implements Action
{
    type = PROJECTS_BY_TECHNOLOGY_SUCCESS;
    constructor(public payload:Project[]) {}
}

export class ProjectsByTechnologyFail implements Action
{
    type = PROJECTS_BY_TECHNOLOGY;
    constructor(public payload:string) {}
}

export class GetProjectIndividual implements Action
{
    type = GET_PROJECT_INDIVIDUAL;
    constructor(public payload) {}
}

export class GetProjectIndividualSuccess implements Action
{
    type = GET_PROJECT_INDIVIDUAL_SUCCESS;
    constructor(public payload:User[]) {}
}

export class GetProjectIndividualFail implements Action
{
    type = GET_PROJECT_INDIVIDUAL_FAIL;
    constructor(public payload:string) {}
}

export class GetProjectTeam implements Action
{
    type = GET_PROJECT_TEAM;
    constructor(public payload) {}
}

export class GetProjectTeamSuccess implements Action
{
    type = GET_PROJECT_TEAM_SUCCESS;
    constructor(public payload:Team[]) {}
}

export class GetProjectTeamFail implements Action
{
    type = GET_PROJECT_TEAM_FAIL;
    constructor(public payload:string) {}
}

export class GetUserNotifications implements Action
{
    type = GET_USER_NOTIFICATIONS;
    constructor(public payload) {}
}

export class GetUserNotificationsSuccess implements Action
{
    type = GET_USER_NOTIFICATIONS_SUCCESS;
    constructor(public payload:Notify[]) {}
}

export class GetUserNotificationsFail implements Action
{
    type = GET_USER_NOTIFICATIONS_FAIL;
    constructor(public payload:string) {}
}

export class GetUserMentions implements Action
{
    type = GET_USER_MENTIONS;
    constructor(public payload) {}
}

export class GetUserMentionsSuccess implements Action
{
    type = GET_USER_MENTIONS_SUCCESS;
    constructor(public payload:Mention[]) {}
}

export class GetUserMentionsFail implements Action
{
    type = GET_USER_MENTIONS_FAIL;
    constructor(public payload:string) {}
}

export class EditUser implements Action
{
    type = EDIT_USER;
    constructor(public payload) {}
}

export class EditUserSuccess implements Action
{
    type = EDIT_USER_SUCCESS;
    constructor(public payload:User) {}
}

export class EditUserFail implements Action
{
    type = EDIT_USER_FAIL;
    constructor(public payload:string) {}
}

export class GetUserProjects implements Action
{
    type = GET_USER_PROJECTS;
    constructor(public payload) {}
}

export class GetUserProjectsSuccess implements Action
{
    type = GET_USER_PROJECTS_SUCCESS;
    constructor(public payload: Project[]) {}
}

export class GetUserProjectsFail implements Action
{
    type = GET_USER_PROJECTS_FAIL;
    constructor(public payload:string) {}
}

export class DenyUserApplication implements Action
{
    type = DENY_USER_APPLICATION;
    constructor(public payload) {}
}

export class DenyUserApplicationSuccess implements Action
{
    type = DENY_USER_APPLICATION_SUCCESS;
    constructor(public payload:boolean) {}
}

export class DenyUserApplicationFail implements Action
{
    type = DENY_USER_APPLICATION_FAIL;
    constructor(public payload:string) {}
}

export class DenyTeamApplication implements Action
{
    type = DENY_TEAM_APPLICATION;
    constructor(public payload) {}
}

export class DenyTeamApplicationSuccess implements Action
{
    type = DENY_TEAM_APPLICATION_SUCCESS;
    constructor(public payload:boolean) {}
}

export class DenyTeamApplicationFail implements Action
{
    type = DENY_TEAM_APPLICATION_FAIL;
    constructor(public payload:string) {}
}

export class LogOut implements Action
{
    type = LOG_OUT;
}