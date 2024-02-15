import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';
import {ICardData} from '../../shared/app.interfaces';
import {LoaderComponent} from '../loader/loader.component';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [LoaderComponent, CommonModule],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {

    @Input() data: ICardData;

    public isLoader = true;

    constructor(
        private cdr: ChangeDetectorRef
    ) {}

    public imageLoaded(): void {
        this.isLoader = false;
        this.cdr.detectChanges();
    }

}
