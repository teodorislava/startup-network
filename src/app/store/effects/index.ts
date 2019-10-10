import { LoginEffects } from './login.effects';
import { UsersEffects } from './user.effects';
import { PostsEffects } from './posts.effects';
import { TeamsEffect } from './teams.effects';
import { TechnologiesEffects } from './technologies.effects';
import { MessagesEffects } from './messages.effects';
import { ProjectsEffects } from './projects.effects';


export const effects:any[] = [
    LoginEffects,
    UsersEffects,
    PostsEffects,
    TeamsEffect,
    TechnologiesEffects,
    MessagesEffects,
    ProjectsEffects
]