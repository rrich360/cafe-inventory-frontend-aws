import { Component } from '@angular/core';
import { AiInsightsService } from '../../services/ai-insights.service';
import { GlobalConstants } from '../../shared/global-constants';

@Component({
  selector: 'app-ai-order-insights',
  templateUrl: './ai-order-insights.component.html',
  styleUrls: ['./ai-order-insights.component.scss']
})
export class AiOrderInsightsComponent {
  loading = false;
  requested = false;

  summary: string | null = null;
  recommendedAction: string | null = null;
  facts: any = null;
  source: string | null = null;
  message: string | null = null;

  constructor(private aiInsightsService: AiInsightsService) {}

  generateInsights() {
    this.loading = true;
    this.requested = true;
    this.message = null;

    this.aiInsightsService.getOrderInsights().subscribe(
      (res: any) => this.show(res),
      (error: any) => {
        // A 429 (limit reached) still carries the facts, so the numbers stay on screen
        if (error.error?.source) {
          this.show(error.error);
        } else {
          this.loading = false;
          this.clearResult();
          this.message = error.error?.message || GlobalConstants.genericError;
        }
      }
    );
  }

  get isAiSummary(): boolean {
    return this.source === 'ai' || this.source === 'cached';
  }

  private show(res: any) {
    this.loading = false;
    this.facts = res.facts ?? null;
    this.source = res.source ?? null;
    this.message = res.message ?? null;

    // The model is asked to end with a "Recommended action:" line; show it separately so it stands out
    const text: string = res.summary ?? '';
    const marker = text.search(/Recommended action:/i);
    if (marker >= 0) {
      this.summary = text.substring(0, marker).trim() || null;
      this.recommendedAction = text.substring(marker).replace(/^Recommended action:\s*/i, '').trim() || null;
    } else {
      this.summary = text.trim() || null;
      this.recommendedAction = null;
    }
  }

  private clearResult() {
    this.summary = null;
    this.recommendedAction = null;
    this.facts = null;
    this.source = null;
  }
}
