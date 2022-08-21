import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from 'src/app/services/game.service';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {

  nameId = "";
  leagues: any = [];
  leaguesSelecteds: any = [];
  games: any = [];

  constructor(
    public activatedRoute: ActivatedRoute,
    public _leagueService: LeagueService,
    public _gameService: GameService,
  ) {
    activatedRoute.params.subscribe(params => {
      this.nameId = params['nameId'];
    });
  }

  ngOnInit(): void {
    this.loadLeaguesByNameId(this.nameId);
  }

  loadLeaguesByNameId(nameId: string) {
    this._leagueService.getByNameId(nameId)
      .subscribe((resp: any) => {
        this.leagues = resp;


        for (let index = 0; index < this.leagues.length; index++) {
          const element = this.leagues[index];

          if (index == 0) {
            element.checked = true;

            this._gameService.getByLeagueId(element.id)
              .subscribe((resp: any) => {
                element.games = resp;
                this.leaguesSelecteds.push(element);
              });
          } else {
            element.checked = false;
          }
        }
      });
  }

  toggleLeagueSelected(league: any, event: any) {
    if (this.leaguesSelecteds.length == 1 && league.checked) {
      console.log("Se debe tener al menos una liga seleccionada");
      league.checked = true;
      event.preventDefault();
      return;
    }

    const indexOfObject = this.leaguesSelecteds.findIndex((object: any) => {
      return object.id === league.id;
    });

    console.log(indexOfObject);

    if (indexOfObject > -1) {
      this.leaguesSelecteds.splice(indexOfObject, 1);
    } else {
      this._gameService.getByLeagueId(league.id)
      .subscribe((resp: any) => {
        league.checked = true;
        league.games = resp;
        this.leaguesSelecteds.push(league);
      });
    }


  }
}
