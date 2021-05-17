import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OverviewDetailsPartnersCbPage } from './overview-details-partners-cb.page';

describe('OverviewDetailsPartnersCbPage', () => {
  let component: OverviewDetailsPartnersCbPage;
  let fixture: ComponentFixture<OverviewDetailsPartnersCbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewDetailsPartnersCbPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OverviewDetailsPartnersCbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
