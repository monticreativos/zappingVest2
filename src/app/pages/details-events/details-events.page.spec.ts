import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailsEventsPage } from './details-events.page';

describe('DetailsEventsPage', () => {
  let component: DetailsEventsPage;
  let fixture: ComponentFixture<DetailsEventsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsEventsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
