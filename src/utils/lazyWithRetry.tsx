import type { ComponentType, LazyExoticComponent } from "react";
import { Suspense, lazy } from "react";

type LazyComponentType = LazyExoticComponent<ComponentType<any>>;

const loader = (Component: LazyComponentType) => (props: any) =>
  (
    <Suspense fallback={<div />}>
      <Component {...props} />
    </Suspense>
  );

export const lazyWithRetry = (componentImport: any) =>
  lazy(async () => {
    const pageHasAlreadyBeenForceRefreshed = JSON.parse(
      window.localStorage.getItem("page-has-been-force-refreshed") || "false"
    );

    try {
      const component = await componentImport();
      window.localStorage.setItem("page-has-been-force-refreshed", "false");

      return component;
    } catch (error) {
      if (!pageHasAlreadyBeenForceRefreshed) {
        // Assuming that the user is not on the latest version of the application.
        // Let's refresh the page immediately.
        window.localStorage.setItem("page-has-been-force-refreshed", "true");
        return window.location.reload();
      }

      // The page has already been reloaded
      // Assuming that user is already using the latest version of the application.
      // Let's let the application crash and raise the error.
      throw error;
    }
  });

export const lazyWithRetryAndLoader = (componentImport: any) =>
  loader(lazyWithRetry(componentImport));
