import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/models/Project';
import { Team } from 'src/app/models/Team';
import { User } from 'src/app/models/User';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { selectors as projectsSelectors } from '../../store/reducers/projects.reducer';
import { GetUserProjects, PostProject, SearchProjects, GetUserTeams, ApplyTeam, ApplyIndividual, GetProjectIndividual, GetProjectTeam, ApproveApplicationInvididual, ApproveApplicationTeam, AddInvestment, ProjectsByTechnology, HotProject, DenyUserApplication, DenyTeamApplication } from 'src/app/store/actions';
import { CookieService } from 'ngx-cookie-service';
import { selectors as teamsSelectors } from '../../store/reducers/teams.reducer';
import { Investment } from 'src/app/models/Investment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  name:string = "";
  tech:string = "";
  search:boolean = false;
  showI:boolean = false;
  showT:boolean = false;
  showAll:boolean = false;
  project:Project = new Project;
  activeProject:number = -1;
  activeSearchedProject:number = -1;
  investment:Investment = new Investment;

  projects$:Observable<Project[]>;
  projectsFail$:Observable<boolean>;
  postProjectFail$:Observable<boolean>;
  applyIndividualSuccess$:Observable<boolean>;
  applyIndividualFail$:Observable<boolean>;
  applyTeamSuccess$:Observable<boolean>;
  applyTeamFail$:Observable<boolean>;
  searchedProjects$:Observable<Project[]>;
  searchedProjectsFail$:Observable<boolean>;
  addInvestment$:Observable<Project>;
  addInvestmentFail$:Observable<boolean>;
  approveTeamSuccess$:Observable<Team>;
  approveTeamFail$:Observable<boolean>;
  approveIndividualSuccess$:Observable<User>;
  approveIndividualFail$:Observable<boolean>;
  projectsByTech$:Observable<Project[]>;
  projectsByTechFail$:Observable<boolean>;
  hotProject$:Observable<Project>;
  hotProjectFail$:Observable<boolean>;
  getProjectIndividuals$:Observable<User[]>;
  getProjectIndividualsFail$:Observable<boolean>;
  getProjectTeams$:Observable<Team[]>;
  getProjectTeamsFail$:Observable<boolean>;
  userTeams$:Observable<Team[]>;
  getUserTeamsFail$:Observable<boolean>;
  denyUserSuccess$:Observable<boolean>;
  denyUserFail$:Observable<boolean>;
  denyTeamSuccess$:Observable<boolean>;
  denyTeamFail$:Observable<boolean>;

  constructor(private store$:Store<State>, private cookieService:CookieService) { }

  ngOnInit() {

    this.projects$ = this.store$.select((state:State) => projectsSelectors.selectAll(state.projects.projects));
    this.projectsFail$ = this.store$.select((state:State) => state.projects.projectsFail); 
    this.postProjectFail$ = this.store$.select((state:State) => state.projects.postProjectFail); 
    this.applyIndividualSuccess$= this.store$.select((state:State) => state.projects.applyIndividualSuccess);
    this.applyIndividualFail$ = this.store$.select((state:State) => state.projects.applyIndividualFail); 
    this.applyTeamSuccess$ = this.store$.select((state:State) => state.projects.applyTeamSuccess);
    this.applyTeamFail$ = this.store$.select((state:State) => state.projects.applyTeamFail); 
    this.searchedProjects$ = this.store$.select((state:State) => state.projects.searchedProjects);
    this.searchedProjectsFail$ = this.store$.select((state:State) => state.projects.searchedProjectsFail);
    this.addInvestment$ = this.store$.select((state:State) => state.projects.addInvestment);
    this.addInvestmentFail$ = this.store$.select((state:State) => state.projects.addInvestmentFail); 
    this.approveTeamSuccess$ = this.store$.select((state:State) => state.projects.approveTeamSuccess);
    this.approveTeamFail$ = this.store$.select((state:State) => state.projects.approveTeamFail); 
    this.approveIndividualSuccess$ = this.store$.select((state:State) => state.projects.approveInidividualSuccess);
    this.approveIndividualFail$ = this.store$.select((state:State) => state.projects.approveInidiviualFail);
    this.projectsByTech$ = this.store$.select((state:State) => state.projects.projectsByTech);
    this.projectsByTechFail$ = this.store$.select((state:State) => state.projects.projectsByTechFail); 
    this.hotProject$ = this.store$.select((state:State) => state.projects.hotProject);
    this.hotProjectFail$ = this.store$.select((state:State) => state.projects.hotProjectFail); 
    this.getProjectIndividuals$ = this.store$.select((state:State) => state.projects.getProjectInidividuals);
    this.getProjectIndividualsFail$ = this.store$.select((state:State) => state.projects.getProjectIndividualsFail); 
    this.getProjectTeams$ = this.store$.select((state:State) => state.projects.getProjectTeams);
    this.getProjectTeamsFail$ = this.store$.select((state:State) => state.projects.getProjectIndividualsFail); 
    this.userTeams$ = this.store$.select((state:State) => teamsSelectors.selectAll(state.teams.teams));
    this.denyTeamSuccess$ = this.store$.select((state:State) => state.projects.denyTeamSuccess);
    this.denyTeamFail$ = this.store$.select((state:State) => state.projects.denyTeamFail);
    this.denyUserSuccess$ = this.store$.select((state:State) => state.projects.denyUserSuccess);
    this.denyUserFail$ = this.store$.select((state:State) => state.projects.denyUserFail);


  this.projectsFail$.subscribe(res => {
    if(res)
      alert('Greska prilikom citanja projekata!');
  });
  this.postProjectFail$.subscribe(res => {
    if(res)
      alert('Greska prilikom postovanja projekta!');
  });
  this.applyIndividualSuccess$.subscribe(res => {
    if(res)
      alert('Uspesno ste se prijavili na projekat!');
  });
  this.applyIndividualFail$.subscribe(res => {
    if(res)
      alert('Greska prilikom prijavljivanja na projekat!');
  });
  this.applyTeamSuccess$.subscribe(res => {
    if(res)
      alert('Uspesno ste prijavili vas tim na projekat!');
  });
  this.applyTeamFail$.subscribe(res => {
    if(res)
      alert('Greska prilikom prijavljivanja tima na projekat!');
  });
  this.searchedProjectsFail$.subscribe(res => {
    if(res)
      alert('Greska prilikom pretrazivanja projekata!');
  });
  this.addInvestmentFail$.subscribe(res => {
    if(res)
      alert('Greska prilikom dodavanja investicije projektu!');
  });
  this.approveTeamSuccess$.subscribe(t => {
    if(t.id !== -1)
      alert('Uspesno ste prihvatili tim na projekat!');
  });
  this.approveTeamFail$.subscribe(res => {
    if(res)
      alert('Greska prilikom prihvatanja tima na projekat!');
  });
  this.approveIndividualSuccess$.subscribe(u => {
    if(u.id !== -1)
      alert('Uspesno ste prihvatili korisnika na projekat!');
  })
  this.approveIndividualFail$.subscribe(res => {
    if(res)
      alert('Greska prilikom prihvatanja na projekat!');
  });
  this.projectsByTechFail$.subscribe(res => {
    if(res)
      alert('Greska prilikom ucitavanja projekata za vas!');
  });
  this.hotProjectFail$.subscribe(res => {
    if(res)
      alert('Greska prilikom citanja hot projekta!');
  });
  this.getProjectIndividualsFail$.subscribe(res => {
    if(res)
      alert('Greska prilikom citanja ljudi na projektu!');
  });
  this.getProjectTeamsFail$.subscribe(res => {
    if(res)
      alert('Greska prilikom citanja timova na projektu!');
  });
  this.denyUserSuccess$.subscribe(res => {
    if(res)
      alert('Uspesno ste prihvatili korisnika na projekat!');
  });
  this.denyUserFail$.subscribe(res => {
    if(res)
      alert('Greska prilikom odbijanja korisnika na projekat!');
  });
  this.denyTeamSuccess$.subscribe(res => {
    if(res)
      alert('Uspesno ste prihvatili tim na vas projekat!');
  });
  this.denyTeamFail$.subscribe(res => {
    if(res)
      alert('Greska prilikom odbijanja tima na projekat!');
  });

    this.store$.dispatch(new GetUserProjects(
      {
        id: this.cookieService.get('UserId'),
        token: this.cookieService.get('Token')
      }
    ));

    this.store$.dispatch(new ProjectsByTechnology({
      token: this.cookieService.get('Token')
    }));

    this.store$.dispatch(new HotProject({
      token: this.cookieService.get('Token')
    }));

  }

  checkKeyTech(event)
  {
    if(event.key === "Enter")
      this.startSearch();
  }

  checkKeyName(event)
  {
    if(event.key === "Enter")
      this.startSearch();
  }

  showSearch()
  {
    this.search = !this.search;
  }

  startSearch()
  {
    this.search = false;
    this.store$.dispatch(new SearchProjects({
      token:this.cookieService.get('Token'),
      name: this.name,
      tech: this.tech
    }));
  }

  createProject()
  {
    if(this.project.description === "" || this.project.enddate === "" || this.project.startdate === "")
    {
      alert('Morate popuniti sva polja!');
      return;
    }
    let end = this.project.enddate.split('/');
    if(end.length !== 3 || end[0].length === 0 || end[1].length === 0 || end[2].length !== 4)
    {
      alert('Unesite ispravan datum!');
      return;
    }
    let start = this.project.startdate.split('/');
    if(start.length !== 3 || start[0].length === 0 || start[1].length === 0 || start[2].length !== 4)
    {
      alert('Unesite ispravan datum!');
      return;
    }

    let p = this.project.description;
    let tags = new Array();

    for(let ind = 0; ind < p.length; ind++)
    {
      let c = p.charAt(ind);
      if(c === '#')
      {
        let s = "";
        for(let j = ind + 1; j < p.length; j++)
        {
          let cc = p.charAt(j);
          if(cc !== ' ' && j != p.length - 1)
            s = s + cc;
          else
          {
            if(s !== "")
            {
              if(j == p.length - 1)
              {
                let ccc = p.charAt(j);
                s = s + ccc;
                tags.push({name: s});
              }
              else
                tags.push({name: s});
            }
            break;
          }
        }
      }
    }

    this.project.technologies = tags;
    this.store$.dispatch(new PostProject({
      project: this.project,
      token: this.cookieService.get('Token')
    }));
    this.project = new Project;
  }

  choseProjectDetails(id)
  {
    this.activeProject = id;
    this.showI = false;
    this.showT = false;
  }

  applyTeam(projectid, teamid)
  {
    this.store$.dispatch(new ApplyTeam({
      projectid: projectid,
      teamid: teamid,
      token: this.cookieService.get('Token')
    }));
  }

  applyIndividual(projectid)
  {
    this.store$.dispatch(new ApplyIndividual({
      projectid: projectid,
      token: this.cookieService.get('Token')
    }));
  }

  showTeams()
  {
    this.store$.dispatch(new GetUserTeams({
      id: this.cookieService.get('UserId'),
      token: this.cookieService.get('Token')
    }));
  }

  showApplicationsIndividuals(pid)
  {
    this.store$.dispatch(new GetProjectIndividual(
      {
        projectid: pid,
        token: this.cookieService.get('Token')
    }));
    this.showT = false;
    this.showI = true;
  }

  showApplicationsTeams(pid)
  {
    this.store$.dispatch(new GetProjectTeam({
      projectid: pid,
      token: this.cookieService.get('Token')
    }));
    this.showT = true;
    this.showI = false;
  }

  approveApplicationTeams(tid, pid)
  {
    this.store$.dispatch(new ApproveApplicationTeam({
      projectid: pid,
      teamid: tid,
      token: this.cookieService.get('Token')
    }));
  }

  approveApplicationIndividuals(uid, pid)
  {
    this.store$.dispatch(new ApproveApplicationInvididual({
      projectid: pid,
      userid: uid,
      token: this.cookieService.get('Token')
    }));
  }

  denyApplicationTeams(tid, pid)
  {
    this.store$.dispatch(new DenyTeamApplication({
      projectid: pid,
      teamid: tid,
      token: this.cookieService.get('Token')
    }));
  }

  denyApplicationIndividuals(uid, pid)
  {
    this.store$.dispatch(new DenyUserApplication({
      projectid: pid,
      userid: uid,
      token: this.cookieService.get('Token')
    }));
  }

  showActiveSearchedProject(id)
  {
    this.activeSearchedProject = id;
  }

  addInvestment(pid)
  {
    if(this.investment.amount === 0 || this.investment.contracttext === "" || this.investment.currency === "")
      {
        alert('Popunite sva polja!');
        return;
      }
    this.store$.dispatch(new AddInvestment({
      investment: this.investment,
      projectid: pid,
      token: this.cookieService.get('Token')
    }));
  }
}
