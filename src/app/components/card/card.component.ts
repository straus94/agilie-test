import {Component, Input} from '@angular/core';
import {ICardData} from '../../shared/app.interfaces';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss'
})
export class CardComponent {

    @Input() data: ICardData;



}
