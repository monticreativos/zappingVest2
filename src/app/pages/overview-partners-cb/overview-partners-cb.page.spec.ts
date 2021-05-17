import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OverviewPartnersCbPage } from './overview-partners-cb.page';

describe('OverviewPartnersCbPage', () => {
  let component: OverviewPartnersCbPage;
  let fixture: ComponentFixture<OverviewPartnersCbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewPartnersCbPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OverviewPartnersCbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
