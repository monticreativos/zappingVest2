import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OverviewChoosePage } from './overview-choose.page';

describe('OverviewChoosePage', () => {
  let component: OverviewChoosePage;
  let fixture: ComponentFixture<OverviewChoosePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewChoosePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OverviewChoosePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
