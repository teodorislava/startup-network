import { Component, OnInit, TemplateRef } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Store } from '@ngrx/store';
import { State } from '../../store/reducers';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/User';
import { GetDetails, GetFriendsPosts, GetPostComments, PostPost, PostComment, BrainPost, SearchUsers, GetReccomendedFriends, ClearInfo, GetUserTechs, GetAllTechs, PostUserTech, PostTech, GetReccomendedTech } from 'src/app/store/actions';
import { Post } from 'src/app/models/Post';
import { selectors as postSelectors } from '../../store/reducers/users.reducer';
import { selectors as commentSelectors } from '../../store/reducers/posts.reducer';
import { selectors as techSelectors } from '../../store/reducers/technologies.reducer';

import { Comment } from '../../models/Comment';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { Technology } from 'src/app/models/Technology';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    afuConfig = {
      multiple: false,
      formatsAllowed: ".jpg",
      maxSize: "5",
      uploadAPI:  {
        url:"http://localhost:58986/File/UploadProfile",
        method:"POST",
        enctype:"multipart/form-data",
        headers: {
          "Content-Type" : "text/plain;charset=UTF-8",
          "Authorization" : `${this.cookieService.get('Token')}`
        }
      },
      attachPinText:"Izmenite profilnu sliku!",
      hideProgressBar: false,
      hideResetBtn: false,
      hideSelectBtn: false
  };

  upload:boolean = false;
  commentsForPost:number = 0;
  post:Post = new Post;
  writeComment:number = 0;
  comment:string = "";
  search:string = "";
  searchTech:string = "";
  technology: Technology = new Technology;
  selectedUser:User;
  modalRef:BsModalRef;
  skill:number = 0;
  popularP:number = -1;
  recommendedP:number = -1;

  user$: Observable<User>;
  getDetailsFail$:Observable<boolean>;
  friendsPosts$:Observable<Post[]>;
  getFriendsPostsFail$:Observable<boolean>;
  comments$:Observable<Comment[]>;
  searchedUsers$:Observable<User[]>;
  searchedUsersFail$:Observable<boolean>;
  popularPosts$:Observable<Post[]>;
  recommendedPosts$:Observable<Post[]>;
  ppFail$:Observable<boolean>;
  reFail$:Observable<boolean>;
  userTechnologies$:Observable<Technology[]>;
  userTechnologiesFail$:Observable<boolean>;
  searchedTechs$:Observable<Technology[]>;
  searchedTechFail$:Observable<boolean>;
  postUserTechF$:Observable<boolean>;
  postTechS$:Observable<boolean>;
  postTechF$:Observable<boolean>;

  constructor(private cookieService: CookieService, private store$:Store<State>, public modalService:BsModalService) { }

  ngOnInit() {

    this.user$ = this.store$.select((state:State) => state.users.user);
    this.getDetailsFail$ = this.store$.select((state:State) => state.users.getDetailsFail);
    this.friendsPosts$ = this.store$.select((state:State) => postSelectors.selectAll(state.users.posts));
    this.getFriendsPostsFail$ = this.store$.select((state:State) => state.users.getFriendsPostsFail);
    this.comments$ = this.store$.select((state:State) => commentSelectors.selectAll(state.posts.comments));
    this.searchedUsers$ = this.store$.select((state: State) => state.users.searchUsers);
    this.searchedUsersFail$ = this.store$.select((state:State) => state.users.searchFail);
    this.recommendedPosts$ = this.store$.select((state:State) => state.posts.recommendedTech);
    this.popularPosts$ = this.store$.select((state:State) => state.posts.recommendedF);
    this.ppFail$ = this.store$.select(state => state.posts.reFriendsFail);
    this.reFail$ = this.store$.select(state => state.posts.reTechFail);

    this.userTechnologies$ = this.store$.select(state => techSelectors.selectAll(state.technolgies.technologies));
    this.userTechnologiesFail$ = this.store$.select(state => state.technolgies.technologiesFail);
    this.searchedTechs$ = this.store$.select(state => state.technolgies.searchedTechs);
    this.searchedTechFail$ = this.store$.select(state => state.technolgies.searchedTechsFail);
    this.postUserTechF$ = this.store$.select(state => state.technolgies.postUserTechFail);
    this.postTechS$ = this.store$.select(state => state.technolgies.postTechSuccess);
    this.postTechF$ = this.store$.select(state => state.technolgies.postTechFail);

    this.postUserTechF$.subscribe(f => {
      if(f)
        alert("Greska prilikom dodavanja tehnologije korisniku!");
    });

    this.postTechF$.subscribe(f => {
      if(f)
        alert("Greska prilikom postovanja tehnologije!");
    });

    this.getDetailsFail$.subscribe(f => {
      if(f)
        alert("Greska prilikom pribavljanja detalja o korisniku!");
    });

    this.searchedTechFail$.subscribe(f => {
      if(f)
        alert("Greska prilikom pribavljanja trazenih tehnologija!");
    });

    this.userTechnologiesFail$.subscribe(f => {
      if(f)
        alert("Greska prilikom pribavljanja korisnikovih tehnologija!");
    });

    this.reFail$.subscribe(f => {
      if(f)
        alert("Greska prilikom pribavljanja preporucenih postova!");
    });

    this.ppFail$.subscribe(f => {
      if(f)
        alert("Greska prilikom pribavljanja popularnih postova!");
    });

    this.getFriendsPostsFail$.subscribe(f => {
      if(f)
        alert("Greska prilikom pribavljanja postova prijatelja!");
    });

    this.searchedUsersFail$.subscribe(f => {
      if(f)
        alert("Greska prilikom trazenja korisnika!");
    });

    this.store$.dispatch(new GetDetails({id: this.cookieService.get('UserId'), token: this.cookieService.get('Token')}));
    this.store$.dispatch(new GetFriendsPosts({id: this.cookieService.get('UserId'), token:this.cookieService.get('Token')}));
    this.store$.dispatch(new GetReccomendedFriends({
      id: this.cookieService.get('UserId'),
      token: this.cookieService.get('Token')
    }));

    this.store$.dispatch(new GetReccomendedTech({
      id: this.cookieService.get('UserId'),
      token: this.cookieService.get('Token')
    }))
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class:'modal-lg', animated: true });
  }

  viewComments(id) {
    this.store$.dispatch(new GetPostComments({token: this.cookieService.get('Token'), id: id}));
    this.commentsForPost = id;
  }

  addPost()
  {
    if(this.post.content === "")
    {
      alert('Morate uneti tekst posta!');
      return;
    }
    let p = this.post.content;
    let mentions = new Array();
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
                tags.push({technologyname: s});
              }
              else
                tags.push({technologyname: s});
            }
            break;
          }
        }
      }
      if(c === '@')
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
                mentions.push({displayname: s});
              }
              else
                mentions.push({displayname: s});
            }
            break;
          }
        }
      }
    }

    this.post.mentions = mentions;
    this.post.tags = tags;

    this.store$.dispatch(new PostPost({post:this.post, token:this.cookieService.get('Token')}));
  }

  openWriteComment(id)
  {
    this.writeComment = id; 
    this.commentsForPost = id;
  }

  postComment(id)
  {
    if(this.comment === "")
    {
      alert('Unesite tekst komentara!');
      return;
    }
    this.store$.dispatch(new PostComment({
      content:this.comment, 
      token: this.cookieService.get('Token'),
      id: id
    }));
    this.writeComment = 0;
  }

  brainPost(id) 
  {
    this.store$.dispatch(new BrainPost({
      id: id,
      token: this.cookieService.get('Token')
    }));
  }

  searchPeople()
  {
    if(this.search === "")
    {
      alert('Unesite parametar pretrage!');
      return;
    }
    this.store$.dispatch(new SearchUsers({
      token: this.cookieService.get('Token'), 
      name: this.search
    }));
  }

  openUserInfo(u:User, userdetails:TemplateRef<any>)
  {
    this.selectedUser = u;
    this.openModal(userdetails);
  }

  closeModalInfo(param)
  {
    this.modalRef.hide();
    this.store$.dispatch(new ClearInfo());
  }

  openTech(tech:TemplateRef<any>)
  {
    this.store$.dispatch(new GetUserTechs(
      {
        id:this.cookieService.get('UserId'),
        token: this.cookieService.get('Token')
      }
    ));
    this.openModal(tech);
  }

  searchTechs()
  {
    if(this.searchTech === "")
    {
      alert('Unesite parametar pretrage!')
      return;
    }
    this.store$.dispatch(new GetAllTechs(this.searchTech));
  }

  addUserTech(technology)
  {
    if(this.skill === 0)
      {
        alert('Odaberite vasu vestinu!');
        return;
      }
    technology.skill = this.skill;
    this.store$.dispatch(new PostUserTech({
      token: this.cookieService.get('Token'),
      technology: technology
    }));
    this.skill = 0;
  }
  
  addTech()
  {
    if(this.technology.type === "" || this.technology.name === "" || this.technology.description === "")
    {
      alert('Morate uneti sva polja!');
      return;
    }
    this.store$.dispatch(new PostTech({
      token: this.cookieService.get('Token'),
      technology: this.technology
    }));
  }

  DocUpload(event)
  {
    if(event.status === 200)
      this.store$.dispatch(new GetDetails({id: this.cookieService.get('UserId'), token: this.cookieService.get('Token')}));
  }

  handlePopular(id)
  {
    this.popularP = id;
    this.recommendedP = -1;
  }

  handleRecomm(id)
  {
    this.recommendedP = id;
    this.popularP = -1;
  }
}